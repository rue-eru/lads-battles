import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'ja', 'ru'],
  defaultLocale: 'en',
  localeDetection: true,
});