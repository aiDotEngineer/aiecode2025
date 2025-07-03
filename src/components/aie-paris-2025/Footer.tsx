import { useState } from "react";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";

import { Container } from "../Container";
import { Logo } from "../Logos";
import { NewsletterFormTwo } from "../Newsletter";
import { PrimaryFooter } from "../PrimaryFooter";
import { SocialMedia } from "../SocialMedia";

export function Footer() {
  const [success, setSuccess] = useState<null | boolean>(null);

  return (
    <footer className="mt-10" id="footer">
      <Container>
        <div className="lg:flex lg:justify-between">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 whitespace-nowrap">
            <div className="space-y-4">
              <b className="block">Content</b>
              <Link href="/summit/2023" className="block text-gray-on-white text-sm">
                Summit 2023
              </Link>
              <Link href="/worldsfair/2024" className="block text-gray-on-white text-sm">
                World's Fair 2024
              </Link>
              <Link href="/summit/2025" className="block text-gray-on-white text-sm">
                Summit 2025
              </Link>
            </div>
            <div className="space-y-4">
              <b className="block">Connect</b>
              <Link href="/jobs" className="block text-gray-on-white text-sm">
                Jobs
              </Link>
              <Link
                href="https://tally.so/r/w2YAdM"
                className="block text-gray-on-white text-sm"
                target="_blank"
              >
                Sponsor Inquiry
              </Link>
            </div>
            <div className="space-y-4">
              <b className="block">About</b>
              <Link href="/privacy" className="block text-gray-on-white text-sm">
                Privacy
              </Link>
              <a
                href="https://www.latent.space/p/ai-engineer"
                className="block text-gray-on-white text-sm"
                target="_blank"
              >
                What is an AI Engineer?
              </a>
              <b className="block">Social</b>
              <SocialMedia
                twitter="https://x.com/aidotengineer"
                youtube="https://www.youtube.com/@aiDotEngineer"
              />
            </div>
          </div>
          <div className="max-lg:mt-10 space-y-4">
            <b>Join our newsletter</b>
            <p>Subscribe to our newsletter and get notified for future events.</p>
            {success === null && <NewsletterFormTwo onSuccess={() => setSuccess(true)} />}
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
        <Link href="/paris" aria-label="Home">
          <Logo logo="aieParis" variant="black" />{" "}
        </Link>
      </PrimaryFooter>
    </footer>
  );
}
