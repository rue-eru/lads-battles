import { languages } from "./languageNames";

export function getOtherAvailableLocales(
  currentLocale: string,
  availableLocales: string[]
) {
  return availableLocales
    .filter(l => l !== currentLocale)
    .map(code => ({
      code,
      name: languages.find(lang => lang.code === code)?.name || code
    }));
}

// Optional: Check if any other locales are available
export function hasOtherAvailableLocales(
  currentLocale: string,
  availableLocales: string[]
): boolean {
  return availableLocales.some(l => l !== currentLocale);
}