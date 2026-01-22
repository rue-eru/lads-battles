import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  const messages = {
    layout: (await import(`../messages/${locale}/layout.json`)).default,
    home: (await import(`../messages/${locale}/home.json`)).default,

    characters: (await import(`../messages/${locale}/characters.json`)).default,
    skills: (await import(`../messages/${locale}/skills.json`)).default,
    weapons: (await import(`../messages/${locale}/weapons.json`)).default,
    ranks: (await import(`../messages/${locale}/ranks.json`)).default,
    protocores: (await import(`../messages/${locale}/protocores.json`)).default,
    gameplay: (await import(`../messages/${locale}/gameplay.json`)).default,
    glossary: (await import(`../messages/${locale}/glossary.json`)).default,
    errors: (await import(`../messages/${locale}/errors.json`)).default,
  };
    
  return {
    locale,
    messages,
    // messages: (await import(`../messages/${locale}.json`)).default
    
  };
});