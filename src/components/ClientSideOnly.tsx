import { useEffect, useState, type ReactNode } from 'react';

export function ClientSideOnly(props: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{props.children}</> : null;
}
