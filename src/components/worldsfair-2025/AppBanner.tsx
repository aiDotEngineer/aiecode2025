import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { TbChecklist } from 'react-icons/tb';

const AppBannerContext = React.createContext(false);

export function AppBannerProvider({
  children,
  isBannerVisible = false,
}: {
  children: React.ReactNode;
  isBannerVisible?: boolean;
}) {
  return (
    <AppBannerContext.Provider value={isBannerVisible}>
      {children}
    </AppBannerContext.Provider>
  );
}

export const useAppBannerContext = () => React.useContext(AppBannerContext);

export function AppBanner() {
  const isBannerVisible = useAppBannerContext();

  if (!isBannerVisible) {
    return null;
  }

  return (
    <div className="flex bg-black text-white font-semibold">
      <a
        className="flex-1 text-center py-3"
        href="https://www.youtube.com/@aidotengineer/?sub_confirmation=1"
      >
        <div className="inline-flex items-center gap-2">
          <FaYoutube className="text-2xl text-red-600" />
          <div>
            Hit the bell on YouTube to see talks free when they're published
          </div>
        </div>
      </a>
      <a
        className="flex-1 text-center py-3 bg-neutral-900"
        href="https://apply.ai.engineer"
      >
        <div className="inline-flex items-center gap-2">
          <TbChecklist className="text-2xl" />
          <div>Now accepting applications to attend Summit 2024!</div>
        </div>
      </a>
    </div>
  );
}
