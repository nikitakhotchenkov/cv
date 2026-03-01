import { cvEn } from './cv.en';
import { cvUk } from './cv.uk';
import type { CVDocument, Locale } from './types';

export function getCV(locale: Locale): CVDocument {
  return locale === 'uk' ? cvUk : cvEn;
}
