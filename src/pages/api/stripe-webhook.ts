import type { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import Stripe from 'stripe';

import { getPrisma } from '@pkg/db';

const stripe = new Stripe(process.env.STRIPE_API_KEY ?? '');
const ENDPOINT_SECRET = process.env.STRIPE_WEBHOOK_SIGNING_SECRET ?? '';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).end('Method Not Allowed');
  }

  // Some docs have it uppercased, some lowercased
  const signature =
    request.headers['Stripe-Signature'] ??
    request.headers['stripe-signature'] ??
    '';

  if (!signature) {
    console.error('No signature provided', request.headers);
    return response.status(400).send('No signature provided');
  }

  let stripeEvent: Stripe.Event | null = null;

  try {
    const requestBuffer = await buffer(request);

    stripeEvent = stripe.webhooks.constructEvent(
      requestBuffer,
      signature,
      ENDPOINT_SECRET,
    );
  } catch (error) {
    const err = error as Error;

    console.error(`Error constructing stripe event: ${err.message}`);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object;

    try {
      await handleCheckoutSession(session);
    } catch (err) {
      const error = err as Error;

      console.error(`Error handling checkout session: ${error.message}`);
      return response.status(500).send(`Webhook Error: ${error.message}`);
    }
  }

  response.status(200).send({ success: true });
}

/**
 * This function handles the completed checkout session event.
 *
 * It is important that this function is idempotent, as it may be called multiple
 * times for the same session.
 */
async function handleCheckoutSession(session: Stripe.Checkout.Session) {
  const { customer_details } = session;
  const email = customer_details?.email;

  if (!email) {
    console.error('No customer email found in session', session);
    throw new Error('No customer email found in session');
  }

  const prisma = getPrisma();

  /**
   * We check for an existing purchase to avoid creating duplicate entries
   */
  const existingPurchase = await prisma.contentAccessPurchase.findFirst({
    where: {
      email,
    },
  });

  if (existingPurchase) {
    console.log('Content access purchase already exists for email:', email);

    return {
      success: true,
    };
  }

  /**
   * Create a new content access purchase entry
   */
  await prisma.contentAccessPurchase.create({
    data: {
      active: true,
      email,
    },
  });

  console.log('Created content access purchase for email:', email);

  return {
    success: true,
  };
}
