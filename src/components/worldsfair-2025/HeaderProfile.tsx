import React from 'react';

import { useBool } from '~/hooks/useBool';
import { useAuth } from '../AuthContext';

export function HeaderProfile() {
  const { endSession, user } = useAuth();
  const [isOpen, setIsOpen] = useBool();
  const ref = useOutsideClick<HTMLDivElement>(setIsOpen.off);

  if (!user) return null;

  return (
    <div className="relative flex gap-6" ref={ref}>
      <button type="button" onClick={setIsOpen.toggle}>
        <ProfileAvatar name={user.name} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 pt-2">
          <div className="flex flex-col gap-3 bg-white text-black min-w-[260px] p-5 rounded-lg shadow-lg">
            <div>
              <div className="uppercase tracking-widest text-gray-400 text-sm">
                Logged in as
              </div>

              <div className="font-semibold">{user.email}</div>
            </div>

            <hr className="border-t border-neutral-300 " />

            <div className="flex">
              <button
                className="text-red-600 font-bold hover:underline"
                onClick={endSession}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((word) => word.toUpperCase().at(0))
    .filter((_, i) => i < 2)
    .join('');

  return (
    <div className="rounded-full bg-[#DDDDDD] font-semibold text-black h-[40px] w-[40px] flex items-center justify-center leading-none">
      {initials}
    </div>
  );
}

function useOutsideClick<T extends HTMLElement>(callback: () => void) {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [callback]);

  return ref;
}
