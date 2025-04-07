import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type ContextValue = {
  selectedTab: string;
  selectTab: (tab: string) => void;
};

const TabContext = createContext(undefined as unknown as ContextValue);

export const useTabContext = () => {
  const ctx = useContext(TabContext);

  if (!ctx) {
    throw new Error('useTabContext must be used within a TabProvider');
  }

  return ctx;
};

type Props = {
  children: React.ReactNode;
  initialValue: string;
  localStorageKey: string;
};

export const TabProvider = ({
  children,
  initialValue,
  localStorageKey,
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(initialValue);

  useEffect(() => {
    const storedTab = localStorage.getItem(localStorageKey);
    if (storedTab) {
      setSelectedTab(storedTab);
    }
  }, [localStorageKey]);

  const selectTab = useCallback(
    (tab: string) => {
      setSelectedTab(tab);
      localStorage.setItem(localStorageKey, tab);
    },
    [localStorageKey],
  );

  return (
    <TabContext.Provider value={{ selectedTab, selectTab }}>
      {children}
    </TabContext.Provider>
  );
};
