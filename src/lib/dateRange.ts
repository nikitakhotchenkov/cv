import type { Locale } from '../content/types';

const MONTHS_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MONTHS_UK = [
  'січень',
  'лютий',
  'березень',
  'квітень',
  'травень',
  'червень',
  'липень',
  'серпень',
  'вересень',
  'жовтень',
  'листопад',
  'грудень',
];

function formatMonthYear(value: string, locale: Locale): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value.trim());

  if (!match) {
    return value;
  }

  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;

  if (monthIndex < 0 || monthIndex > 11) {
    return value;
  }

  const month = locale === 'uk' ? MONTHS_UK[monthIndex] : MONTHS_EN[monthIndex];
  return `${month} ${year}`;
}

export function formatDateRange(locale: Locale, start: string, end?: string | null): string {
  const startText = formatMonthYear(start, locale);
  const endText = end ? formatMonthYear(end, locale) : locale === 'uk' ? 'дотепер' : 'Present';

  return `${startText} - ${endText}`;
}

export function buildPdfFilename(locale: Locale): string {
  return locale === 'uk' ? 'cv-uk.pdf' : 'cv-en.pdf';
}
