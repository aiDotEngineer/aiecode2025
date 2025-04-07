import { z } from 'zod';
import type { NextApiRequest, NextApiResponse } from 'next';

const inputSchema = z.object({
  emailAddress: z.string().email(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { emailAddress } = inputSchema.parse(req.body);
    
    // Add to Loops.so
    const apiKey = process.env.LOOPS_API_KEY;
    if (!apiKey) {
      throw new Error('LOOPS_API_KEY not configured');
    }

    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: emailAddress.toLowerCase(),
        userGroup: 'Subscribers',
        source: 'Early Landing Page Subscribe',
      }),
    });

    if (!response.ok) {
      throw new Error(`Loops API error: ${response.status}`);
    }

    const result = await response.json();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(400).json({ 
      success: false, 
      error: 'Failed to subscribe' 
    });
  }
} 