import Image from 'next/image';

import { MarkdownView } from '../MarkdownView';

// Simple replacement for parseSocialLinks
function parseSocialLinks(socialLinks: string | null): {
  socialLinkedIn: string | null;
  socialTwitter: string | null;
  socialOther: string | null;
} {
  if (!socialLinks) {
    return { socialLinkedIn: null, socialTwitter: null, socialOther: null };
  }
  
  try {
    const links = JSON.parse(socialLinks);
    return {
      socialLinkedIn: links.linkedin || links.linkedIn || null,
      socialTwitter: links.twitter || links.x || null,
      socialOther: links.website || links.other || null,
    };
  } catch {
    return { socialLinkedIn: null, socialTwitter: null, socialOther: null };
  }
}

type PresenterItemProps = {
  about: string;
  name: string;
  profilePhotoUrl: string;
  role: string;
  socialLinks: string | null;
};

/**
 * I noticed some spacing issues with the `Blockquote` component, and rather than
 * try to make it work again, I just rebuilt it. Rather than do a bunch of grid
 * shenanigans, it's much simpler to just render the content twice, and hide
 * the one you don't need at certain breakpoints
 */
export function PresenterItem(props: PresenterItemProps) {
  return (
    <div>
      <div className="sm:hidden">
        <PresenterMobile {...props} />
      </div>

      <div className="hidden sm:block">
        <PresenterDesktop {...props} />
      </div>
    </div>
  );
}

function Name({ children }: { children: string }) {
  return <h2 className="font-display text-3xl font-semibold">{children}</h2>;
}

function About({ children }: { children: string }) {
  return (
    // negative margin cancels out the outermost margin applied by .markdown-content
    <blockquote className="text-xl/7 text-neutral-600 -my-3">
      <MarkdownView markdown={children} />
    </blockquote>
  );
}

function PresenterMobile({
  about,
  name,
  profilePhotoUrl,
  role,
  socialLinks,
}: PresenterItemProps) {
  return (
    <figure className="flex flex-col gap-4">
      <Name>{name}</Name>

      {about && <About>{about}</About>}
      <Image
        alt={name}
        className="h-12 w-12 object-cover grayscale rounded-xl"
        height={400}
        width={400}
        src={profilePhotoUrl || 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='}
        unoptimized
      />

      <figcaption className="text-sm text-black flex flex-col">
        <span className="font-semibold">{name}</span>
        <span>{role}</span>
      </figcaption>

      <SocialLinks socialLinks={socialLinks} />
    </figure>
  );
}

function PresenterDesktop({
  about,
  name,
  profilePhotoUrl,
  role,
  socialLinks,
}: PresenterItemProps) {
  return (
    <figure className="flex flex-row gap-16 items-center">
      <div className="w-[40%] flex flex-col gap-4">
        <Name>{name}</Name>

        <Image
          alt={name}
          className="object-cover grayscale aspect-[7/9] rounded-3xl h-auto w-full"
          height={400}
          width={400}
          src={profilePhotoUrl || 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='}
          unoptimized
        />
      </div>

      <div className="w-[50%] flex flex-col gap-4">
        {about && <About>{about}</About>}

        <figcaption className="text-base text-black">
          <span className="font-semibold">
            {name}, {role}
          </span>
        </figcaption>

        <SocialLinks socialLinks={socialLinks} />
      </div>
    </figure>
  );
}

function SocialLinks({ socialLinks }: { socialLinks: string | null }) {
  const parsedSocialLinks = parseSocialLinks(socialLinks ?? null);
  const hasLinks = Object.values(parsedSocialLinks).some(Boolean);

  if (!hasLinks) return null;

  const { socialLinkedIn, socialTwitter, socialOther } = parsedSocialLinks;

  return (
    <ul className="list-disc list-inside">
      {socialOther && (
        <li>
          <a
            className="underline"
            href={socialOther}
            rel="noopener noreferrer"
            target="_blank"
          >
            Website
          </a>
        </li>
      )}
      {socialLinkedIn && (
        <li>
          <a
            className="underline"
            href={socialLinkedIn}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      )}
      {socialTwitter && (
        <li>
          <a
            className="underline"
            href={socialTwitter}
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </li>
      )}
    </ul>
  );
}
