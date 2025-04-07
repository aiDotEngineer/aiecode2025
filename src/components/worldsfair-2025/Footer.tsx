/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Link from 'next/link';
import { IoMdCheckmark } from 'react-icons/io';

import { useWorldsFair2025 } from '../ChoosePrimaryLayout';
import { Container } from '../Container';
import { Logo } from '../Logos';
import { NewsletterFormTwo } from '../Newsletter';
import { PrimaryFooter } from '../PrimaryFooter';
import { SocialMedia } from '../SocialMedia';
import AddCalendarButton from './AddCalendarButton';

export function Footer() {
  const {
    CONF_URL,
    SPEAKERS_URL,
    WORKSHOPS_URL,
    SCHOLARSHIPS_URL,
    VOLUNTEER_URL,
    SPONSOR_INQUIRY_URL,
    CONTACT_URL,
    TWITTER_URL,
    YOUTUBE_URL,
  } = useWorldsFair2025();
  const [success, setSuccess] = useState<null | boolean>(null);

  return (
    <footer className="mt-10">
      <Container>
        <div className="lg:flex lg:justify-between">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 whitespace-nowrap">
            <div className="space-y-4">
              <b className="block">Content</b>
              {/* <Link href={SCHEDULE_URL} className="block">
                Schedule
              </Link> */}
              <Link
                href={SPEAKERS_URL}
                className="block text-gray-on-white text-sm"
              >
                Speakers
              </Link>
              <Link
                href={WORKSHOPS_URL}
                className="block text-gray-on-white text-sm"
              >
                Workshops
              </Link>
              <a href="#" className="block text-gray-on-white text-sm">
                Topic Tables - soon
              </a>
              <Link
                href="/summit/2023"
                className="block text-gray-on-white text-sm"
              >
                Summit 2023
              </Link>
            </div>
            <div className="space-y-4">
              <b className="block">Connect</b>
              <Link href="/jobs" className="block text-gray-on-white text-sm">
                Jobs
              </Link>
              <Link
                href={SPONSOR_INQUIRY_URL}
                className="block text-gray-on-white text-sm"
                target="_blank"
              >
                Sponsor Inquiry
              </Link>
              <a
                href={VOLUNTEER_URL}
                className="block text-gray-on-white text-sm"
                target="_blank"
              >
                Volunteer
              </a>
              <a
                href={SCHOLARSHIPS_URL}
                className="block text-gray-on-white text-sm"
                target="_blank"
              >
                Scholarships
              </a>
              <Link
                href={CONTACT_URL}
                className="block text-gray-on-white text-sm"
              >
                Contact Us
              </Link>
            </div>
            <div className="space-y-4">
              <b className="block">About</b>
              <Link
                href={`${CONF_URL}/conduct`}
                className="block text-gray-on-white text-sm"
              >
                Code of Conduct
              </Link>
              <a
                href="https://www.latent.space/p/ai-engineer"
                className="block text-gray-on-white text-sm"
                target="_blank"
              >
                What is an AI Engineer?
              </a>
              <b className="block">Social</b>
              <SocialMedia twitter={TWITTER_URL} youtube={YOUTUBE_URL} />
            </div>
          </div>
          <div className="max-lg:mt-10 space-y-4">
            <b>Join our newsletter</b>
            <p>
              Subscribe to our newsletter and get notified for future events.
            </p>
            {success === null && (
              <NewsletterFormTwo onSuccess={() => setSuccess(true)} />
            )}
            {success === true && (
              <div className="space-y-3">
                <div className="flex gap-2 h-14 items-center rounded-2xl py-4 px-6 bg-white text-black border">
                  <IoMdCheckmark width="1.5em" height="1.5em" />
                  Success! Check your inbox for next steps.
                </div>
                <div className="m-auto w-fit">
                  <AddCalendarButton />
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      <PrimaryFooter>
        <Link href={CONF_URL} aria-label="Home">
          <Logo logo="worldsFair" variant="black" />{' '}
        </Link>
      </PrimaryFooter>
    </footer>
  );
}
