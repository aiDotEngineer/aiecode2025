// src/hooks/useTito.ts
import { useState, useEffect } from 'react';
import { addSourceToTitoUrl } from '../utils/utmUtils'; // Assuming utmUtils is in src/utils

const BASE_TITO_URL = 'https://ti.to/software-3/ai-engineer-worlds-fair-2025';

/**
 * Custom hook to manage the Tito URL with added source information.
 * @returns The Tito URL string with source parameters.
 */
export function useTito() {
  const [titoUrl, setTitoUrl] = useState(BASE_TITO_URL);

  useEffect(() => {
    const updateTitoUrl = () => {
      const urlWithSource = addSourceToTitoUrl(BASE_TITO_URL);
      setTitoUrl(urlWithSource);
    };

    updateTitoUrl();
    const intervalId = setTimeout(updateTitoUrl, 1000);

    return () => clearTimeout(intervalId);
  }, []);
  return titoUrl;
}
