import { FaYoutube } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

type SocialMediaProps = {
  twitter?: string;
  youtube?: string;
};

export function SocialMedia({ twitter, youtube }: SocialMediaProps) {
  return (
    <div className="flex gap-4">
      {twitter ? (
        <a href={twitter} target="_blank">
          <RiTwitterXFill />
        </a>
      ) : null}
      {youtube ? (
        <a href={youtube} target="_blank">
          <FaYoutube />
        </a>
      ) : null}
    </div>
  );
}
