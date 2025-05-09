import { useState } from "react";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";

import { Container } from "./Container";
import { Logo } from "./Logos";
import { NewsletterFormTwo } from "./Newsletter";
import { PrimaryFooter } from "./PrimaryFooter";
import { SocialMedia } from "./SocialMedia";

export function MainFooter() {
  const [success, setSuccess] = useState<null | boolean>(null);

  const sponsorInquiry = new URL("mailto:sponsorships@ai.engineer");
  sponsorInquiry.searchParams.set(
    "subject",
    "AIE World's Fair 2024 Sponsor Inquiry"
  );

  const TWITTER_URL = "https://twitter.com/aidotengineer";
  const YOUTUBE_URL = "https://www.youtube.com/@aiDotEngineer";

  const contact = new URL("mailto:hello@ai.engineer");
  contact.searchParams.set("subject", "AIE World's Fair 2024 Contact");

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
              <Link href="#" className="block text-gray-on-white text-sm">
                Network
              </Link>
              <Link href="#" className="block text-gray-on-white text-sm">
                Events
              </Link>
              <Link href="#" className="block text-gray-on-white text-sm">
                Training
              </Link>
              <Link href="/jobs" className="block text-gray-on-white text-sm">
                Jobs
              </Link>
            </div>
            <div className="space-y-4">
              <b className="block">Connect</b>
              <Link
                href={sponsorInquiry.toString().replaceAll("+", "%20")}
                className="block text-gray-on-white text-sm"
                target="_blank"
              >
                Sponsor Inquiry
              </Link>
              <a
                href="#"
                className="block text-gray-on-white text-sm"
                target="_blank"
              >
                Volunteer
              </a>
              <a
                href="#"
                className="block text-gray-on-white text-sm"
                target="_blank"
              >
                Scholarships
              </a>
              <Link
                href={contact.toString().replaceAll("+", "%20")}
                className="block text-gray-on-white text-sm"
              >
                Contact Us
              </Link>
            </div>
            <div className="space-y-4">
              <b className="block">About</b>
              <Link href="#" className="block text-gray-on-white text-sm">
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
            <b>Join the AI.Engineer newsletter</b>
            <p>Stay up to date on the AI Engineering industry!</p>
            {success === null && (
              <NewsletterFormTwo onSuccess={() => setSuccess(true)} />
            )}
            {success === true && (
              <div className="space-y-3">
                <div className="flex gap-2 h-14 items-center rounded-2xl py-4 px-6 bg-white text-black border">
                  <IoMdCheckmark width="1.5em" height="1.5em" />
                  Success! Check your inbox for next steps.
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      <PrimaryFooter>
        <Logo logo="aie" variant="black" />
      </PrimaryFooter>
    </footer>
  );
}
