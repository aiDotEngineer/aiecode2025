import { useRouter } from 'next/router';
import * as Dialog from '@radix-ui/react-dialog';
import { CiLock } from 'react-icons/ci';
import { FaChevronRight } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

import { ShiftBy } from './ShiftBy';
import { SignInForm } from './SignInForm';

export function PromptPaidContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay>
          <div className="bg-black/50 fixed inset-0" />
        </Dialog.Overlay>

        <Dialog.Content>
          <Dialog.Title asChild>
            <span className="sr-only">
              Sign in to get access to exclusive content
            </span>
          </Dialog.Title>
          <Dialog.Description asChild>
            <span className="sr-only">
              This video is exclusive to members. Sign in to watch it now.
            </span>
          </Dialog.Description>

          <div className="w-full max-w-[640px] px-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white w-full rounded-xl overflow-hidden">
              <header className="relative flex flex-col justify-center bg-gray-200 py-3">
                <div className="absolute left-2 flex flex-col justify-center">
                  <Dialog.Close asChild>
                    <button className="flex justify-center items-center bg-gray-300 rounded-full h-[24px] w-[24px] hover:bg-red-300 hover:text-white transition-colors">
                      <IoCloseSharp />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <CiLock />
                  <ShiftBy y={1}>
                    <span className="text-sm">Exclusive Content</span>
                  </ShiftBy>
                </div>
              </header>

              <div className="p-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-center font-bold text-3xl">
                    Sign in to get access
                  </span>

                  <p className="text-center leading-tight">
                    Conference attendees get first access to all recorded
                    content including talks, panels, and workshops!
                  </p>
                </div>

                <div>
                  <SignInForm
                    onSuccess={() => {
                      void router.push('/worldsfair/2024/schedule');
                    }}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <StripeCTA />
                  <YouTubeCTA />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/****************************************
  Helpers
*****************************************/

const PAYMENT_LINK = process.env.NEXT_PUBLIC_ALL_ACCESS_PAYMENT_LINK;

export function StripeCTA() {
  if (!PAYMENT_LINK) {
    return null;
  }

  return (
    <a
      className="flex items-center gap-2 bg-[#FDF6E9] border-2 border-[#FDF6E9] rounded-lg hover:bg-[#FCEED2] hover:border-[#EEA820] transition-colors p-2"
      href={PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="shrink-0">
        <Sparkles />
      </div>

      <div className="grow flex flex-col text-sm">
        <span>Didn't attend in person?</span>
        <span className="font-bold">
          Get immediate access to 150+ sessions for just $199
        </span>
      </div>

      <div className="shrink-0">
        <FaChevronRight />
      </div>
    </a>
  );
}

function Sparkles() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_786_1661)">
        <path
          d="M38.92 16L40.5 12.5L44 10.92C44.78 10.56 44.78 9.45998 44 9.09998L40.5 7.51998L38.92 3.99998C38.56 3.21998 37.46 3.21998 37.1 3.99998L35.52 7.49998L32 9.07998C31.22 9.43998 31.22 10.54 32 10.9L35.5 12.48L37.08 16C37.44 16.78 38.56 16.78 38.92 16ZM23 19L19.82 12C19.12 10.44 16.88 10.44 16.18 12L13 19L6.00002 22.18C4.44002 22.9 4.44002 25.12 6.00002 25.82L13 29L16.18 36C16.9 37.56 19.12 37.56 19.82 36L23 29L30 25.82C31.56 25.1 31.56 22.88 30 22.18L23 19ZM37.08 32L35.5 35.5L32 37.08C31.22 37.44 31.22 38.54 32 38.9L35.5 40.48L37.08 44C37.44 44.78 38.54 44.78 38.9 44L40.48 40.5L44 38.92C44.78 38.56 44.78 37.46 44 37.1L40.5 35.52L38.92 32C38.56 31.22 37.44 31.22 37.08 32Z"
          fill="url(#paint0_linear_786_1661)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_786_1661"
          x1="2.34659"
          y1="3.41623"
          x2="51.0732"
          y2="37.8694"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FADD45" />
          <stop offset="1" stop-color="#FEA029" />
        </linearGradient>
        <clipPath id="clip0_786_1661">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const YT_LINK =
  'https://www.youtube.com/channel/UCLKPca3kwwd-B59HNr-_lvA?sub_confirmation=1';

export function YouTubeCTA() {
  return (
    <a
      className="group flex justify-center items-center gap-2 p-1 hover:bg-gray-100 transition-colors rounded-lg"
      href={YT_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TbBrandYoutubeFilled color="#FF0000" size={24} />

      <div>
        <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
          Hit the bell on YouTube to see talks free when they're published
        </span>
      </div>
    </a>
  );
}
