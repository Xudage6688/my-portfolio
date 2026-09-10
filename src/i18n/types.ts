export type Locale = "en" | "zh";

export type L10n = Record<Locale, string>;

export function pick(l: L10n, locale: Locale): string {
  return l[locale];
}
