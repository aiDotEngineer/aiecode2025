import { useEffect, useState } from 'react';

// https://github.com/RickBr0wn/use-local-storage/blob/master/BLOGPOST.md

export function useLocalStorage(
  key: string,
  initialValue: boolean,
): [boolean, (value: boolean) => void] {
  const [storedValue, setStoredValue] = useState<boolean>(initialValue);

  // use this otherwise get hydration error in nextjs
  useEffect(() => {
    const item = window.localStorage.getItem(key)
      ? !!JSON.parse(window.localStorage.getItem(key) ?? 'false')
      : !!initialValue;
    setStoredValue(item);
  }, [initialValue, key]);

  const setValueInLocalStorage = (value: boolean) => {
    try {
      const updatedArgValue = value;
      setStoredValue(updatedArgValue);
      window.localStorage.setItem(key, JSON.stringify(updatedArgValue));
    } catch (err) {
      // TODO: A better error handling implementation is needed.
      console.log(err);
    }
  };
  return [storedValue, setValueInLocalStorage];
}
