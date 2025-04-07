import { useId, useState } from 'react';
import clsx from 'clsx';
import { CgArrowLongRight } from 'react-icons/cg';
import { IoMdCheckmark } from 'react-icons/io';
import {
  TbCirclePercentage,
  TbDiamond,
  TbNews,
  TbTicket,
} from 'react-icons/tb';
import * as z from 'zod';

import { Button } from '~/components/Button';
import { api } from '~/support/api';

/****************************************
  Reusable Newsletter Logic
*****************************************/

const formSchema = z.object({
  emailAddress: z.string().email(),
});

type UseNewsletterProps = { onSuccess: () => void } | undefined;

function useNewsletter(
  { onSuccess }: UseNewsletterProps = { onSuccess: () => null },
) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function onSuccessInternal({ success }: { success: boolean }) {
    if (success) {
      setSuccess(true);
      onSuccess();
    }
  }

  const { mutate, isLoading: pending } = api.web.subscribe.useMutation({
    onSuccess: onSuccessInternal,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const zodResults = formSchema.safeParse(Object.fromEntries(formData));
    if (zodResults.success) {
      mutate({ emailAddress: zodResults.data.emailAddress });
    } else {
      setError('Invalid Email');
    }
  }

  return {
    handleSubmit,
    pending,
    success,
    error,
  };
}

/****************************************
  Newsletter Variations
*****************************************/

/**
 * One
 */

export function NewsletterFormOne() {
  const { handleSubmit, pending, success } = useNewsletter();
  const emailFieldId = useId();

  return (
    <>
      {success === true && (
        <div className="flex gap-2 h-14 items-center rounded-2xl py-4 px-6 bg-white text-black border">
          <IoMdCheckmark width="1.5em" height="1.5em" />
          Success! Check your inbox for next steps.
        </div>
      )}
      {success === false && (
        <div className="space-y-5">
          <form onSubmit={handleSubmit}>
            <label htmlFor={emailFieldId} className="font-bold">
              Email Address
            </label>
            <input
              id={emailFieldId}
              type="email"
              placeholder="Enter the email associated with your conference pass"
              autoComplete="email"
              autoFocus
              required
              name="emailAddress"
              className="block mt-1 w-full rounded-lg py-2 px-3 text-base focus:outline-hidden border border-gray-300"
            />
            <Button
              aria-label="Submit"
              type="submit"
              invert={false}
              className="w-full mt-6"
            >
              {pending ? <span>Sending...</span> : 'Keep me up to date'}
            </Button>
          </form>
          <p className="text-center">🛎️ No Spam. Just the good stuff.</p>
        </div>
      )}
    </>
  );
}

/**
 * Two
 */

type NewsletterFormTwoProps = {
  autoFocus?: boolean;
  inputClassName?: string;
  onSuccess(): void;
};

export function NewsletterFormTwo({
  autoFocus,
  inputClassName,
  onSuccess,
}: NewsletterFormTwoProps) {
  const { handleSubmit, pending } = useNewsletter({ onSuccess });

  const inputDesign =
    inputClassName ?? 'bg-white text-black placeholder:text-gray-500';

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          autoFocus={autoFocus}
          name="emailAddress"
          className={clsx(
            'block w-full rounded-2xl py-4 pl-6 pr-20 text-base focus:outline-hidden border border-gray-300',
            inputDesign,
          )}
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex text-2xl aspect-square h-full items-center justify-center rounded-xl bg-black text-white transition hover:bg-neutral-800"
          >
            {pending ? <span>...</span> : <CgArrowLongRight />}
          </button>
        </div>
      </div>
    </form>
  );
}

/**
 * Three
 */

type NewsletterFormThreeProps = {
  onSuccess(): void;
};

export function NewsletterFormThree({ onSuccess }: NewsletterFormThreeProps) {
  const { handleSubmit, pending, error } = useNewsletter({ onSuccess });

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="relative">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          name="emailAddress"
          className={clsx(
            'block w-full rounded-2xl py-4 pl-6 pr-20 text-base',
            // Background
            'bg-neutral-400/15 hover:bg-neutral-400/25 focus:bg-neutral-400/15',
            // Border
            'outline-hidden border border-transparent focus:border-neutral-400/60',
            // Error
            error ? 'border-red-500' : '',
          )}
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex text-2xl aspect-square h-full items-center justify-center rounded-xl bg-black text-white transition hover:bg-neutral-800"
          >
            {pending ? <span>...</span> : <CgArrowLongRight />}
          </button>
        </div>
      </div>
      {error && (
        <div className="text-red-500 text-sm text-left mt-2">
          Invalid Email Address. Please use a valid email address.
        </div>
      )}
    </form>
  );
}

/**
 * Four
 */

export function NewsletterFormFour() {
  const { handleSubmit, pending, success } = useNewsletter();

  return (
    <>
      {success === false && (
        <div className="space-y-5">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              placeholder="Enter the email address"
              aria-label="Email Address"
              autoComplete="email"
              autoFocus
              name="emailAddress"
              className="w-2/3 rounded-full py-4 px-6 text-base bg-white/10 focus:outline-hidden"
            />
            <Button aria-label="Submit" type="submit" invert className="flex-1">
              {pending ? <span>Sending...</span> : 'Subscribe'}
            </Button>
          </form>
        </div>
      )}
      {success === true && (
        <div className="w-full flex gap-2 h-14 items-center rounded-full py-7 px-6 bg-white/10 text-white">
          <IoMdCheckmark width="1.5em" height="1.5em" />
          Success! Check your inbox for next steps.
        </div>
      )}
    </>
  );
}

/****************************************
  Misc Newsletter Content
*****************************************/

export function NewsletterBullets() {
  return (
    <div className="space-y-5">
      <div className="flex">
        <div className="self-center text-2xl pr-4">
          <TbDiamond />
        </div>
        <div className="flex-1 flex flex-col">
          <b>Exclusive Content</b>
          <span className="text-sm">
            Gain early access to articles, guides, resources, and more
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="self-center text-2xl pr-4">
          <TbNews />
        </div>
        <div className="flex-1 flex flex-col">
          <b>Valuable Insights</b>
          <span className="text-sm">
            Discover expert tips and industry trends to keep you ahead
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="self-center text-2xl pr-4">
          <TbCirclePercentage />
        </div>
        <div className="flex-1 flex flex-col">
          <b>Special Offers</b>
          <span className="text-sm">
            Get early-bird discounts, promotions, and member-only perks
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="self-center text-2xl pr-4">
          <TbTicket />
        </div>
        <div className="flex-1 flex flex-col">
          <b>Event Updates</b>
          <span className="text-sm">
            Be the first to know about launches and upcoming events
          </span>
        </div>
      </div>
    </div>
  );
}
