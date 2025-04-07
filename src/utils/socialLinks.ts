type SocialLinks = {
  socialLinkedIn?: string;
  socialTwitter?: string;
  // TODO: This is unreachable, notice there is no `parsed.socialBlog` below
  socialBlog?: string;
  socialOther?: string;
};

// Duplicate of packages/api/src/other/saveProfile.ts
const linkedInRegEx =
  /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[a-z0-9_-]{1,100}\/?$/i;
const twitterRegEx = /^(https?:\/\/)?(www\.)?twitter\.com\/[a-z0-9_]{1,15}$/i;
const urlRegEx = /^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]{2,})+([/\w-]*)*$/i;

export function parseSocialLinks(input: string | null) {
  const parsed: SocialLinks = {};

  for (const line of (input ?? '').split(/[\r\n]+/)) {
    if (linkedInRegEx.test(line)) {
      parsed.socialLinkedIn = line;
      continue;
    }
    if (twitterRegEx.test(line)) {
      parsed.socialTwitter = line;
      continue;
    }
    // TODO: This one could just be overwritten by the last line. Could easily have
    // multiple social others
    if (urlRegEx.test(line)) {
      parsed.socialOther = line;
    }
  }

  return parsed;
} 