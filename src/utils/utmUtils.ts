
const UTM_SOURCE_KEY = 'aie_utm_source';

/**
 * Stores the UTM source parameter in localStorage
 */
export function storeUtmSource(utmSource: string): void {
  if (typeof window !== 'undefined' && utmSource) {
    localStorage.setItem(UTM_SOURCE_KEY, utmSource);
  }
}

/**
 * Retrieves the stored UTM source parameter from localStorage
 */
export function getUtmSource(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(UTM_SOURCE_KEY);
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
