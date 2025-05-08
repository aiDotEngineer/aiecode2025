
import Cookies from 'js-cookie';

const UTM_SOURCE_KEY = 'aie_utm_source';

/**
 * Stores the UTM source parameter in localStorage and as a cookie
 */
export function storeUtmSource(utmSource: string): void {
  if (typeof window !== 'undefined' && utmSource) {
    localStorage.setItem(UTM_SOURCE_KEY, utmSource);
    
    Cookies.set(UTM_SOURCE_KEY, utmSource, { 
      expires: 365,
      path: '/',
      sameSite: 'lax'
    });
  }
}

/**
 * Retrieves the stored UTM source parameter from localStorage or cookie
 */
export function getUtmSource(): string | null {
  if (typeof window !== 'undefined') {
    const fromStorage = localStorage.getItem(UTM_SOURCE_KEY);
    if (fromStorage) return fromStorage;
    
    return Cookies.get(UTM_SOURCE_KEY) || null;
  }
  return null;
}

/**
 * Adds the UTM source parameter to a Tito URL if a source is available
 */
export function addSourceToTitoUrl(titoUrl: string): string {
  const utmSource = getUtmSource();
  if (!utmSource) return titoUrl;

  const url = new URL(titoUrl);
  url.searchParams.set('source', utmSource);
  return url.toString();
}
