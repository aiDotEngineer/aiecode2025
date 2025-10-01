import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { RiTwitterXFill } from 'react-icons/ri';

import { useWorldsFair2025 } from '../ChoosePrimaryLayout';
import { NewsletterFormTwo } from '../Newsletter';
import AddCalendarButton from './AddCalendarButton';

export function FreeRemoteTicket() {
  const { TWITTER_URL, YOUTUBE_URL } = useWorldsFair2025();
  const [success, setSuccess] = useState<null | boolean>(null);

  return (
    <div className="rounded-3xl bg-black text-white p-12">
      <div className="flex gap-20 max-lg:flex-col">
        <div className="lg:flex-1 space-y-6">
          <h1 className="text-4xl font-bold">Watch the livestream</h1>
          <p className="text-gray-on-black">
            Subscribe to our newsletter and get a free remote ticket to the livestream. 
          </p>
          <div>
            {success === null && (
              <NewsletterFormTwo onSuccess={() => setSuccess(true)} />
            )}
            {success === true && (
              <div className="space-y-3">
                <div className="flex gap-2 h-14 items-center rounded-2xl py-4 px-6 bg-white text-black">
                  <IoMdCheckmark width="1.5em" height="1.5em" />
                  Success! Check your inbox for next steps.
                </div>
                <div className="m-auto w-fit">
                  <AddCalendarButton />
                </div>
              </div>
            )}
          </div>
          <p>Email list also gets first notification for all future events!</p>
        </div>
        <div className="lg:flex-1 space-y-12 flex flex-col justify-between">
          <a
            aria-label="View Our Youtube"
            href={YOUTUBE_URL}
            className="block"
            target="_blank"
          >
            <h2 className="flex justify-between items-center text-xl">
              <b>
                <FaYoutube className="inline mr-2 text-2xl" />
                Hit the bell on YouTube
              </b>
              <span>
                <FaArrowRight />
              </span>
            </h2>
            <p className="text-gray-on-black">
              Subscribe to our YouTube channel for first access to all our talk
              recordings and other content.
            </p>
          </a>

          <a
            aria-label="View Our Twitter"
            href={TWITTER_URL}
            className="block"
            target="_blank"
          >
            <h2 className="flex justify-between items-center text-xl">
              <b>
                <RiTwitterXFill className="inline mr-2 text-2xl" />
                Follow us on X
              </b>
              <span className="text-size-2xl">
                <FaArrowRight />
              </span>
            </h2>
            <p className="text-gray-on-black">
              Stay in the loop on the latest announcements, & follow along with
              live clips from the stage on event days.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
