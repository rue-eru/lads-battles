import type { Metadata } from 'next';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Inknut_Antiqua, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SideNav from '../components/side-nav/SideNav';
import { Suspense } from 'react';
import Loading from './loading';

const InknutAntiqua = Inknut_Antiqua({
  variable: "--font-inknut-antiqua",
  subsets: ['latin'],
  weight: ["300" , "400" , "500" , "600" , "700"],
  display: 'swap',
  preload: false,
});

const SourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ['latin', 'cyrillic'],
  weight: ["300" , "400" , "500" , "600" , "700"],
  display: 'swap',
  preload: false,
});

const NotoSerifJP = localFont({
    variable: "--font-noto-serif-jp",
    src: [
    {
      path: '../../../public/fonts/Noto_Serif_JP/NotoSerifJP-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Noto_Serif_JP/NotoSerifJP-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ]
})

/*
const NotoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  //ts doesnt allow japanese???
  subsets: [],
  weight: ["300" , "400" , "500" , "600" , "700"],
  display: 'swap',
  preload: true,
}); 
*/

//fix l10n
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('layout');
  return {
    title: t('title'),
    description: t('description'),
  };
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);


  return (
    <html lang={locale} style={{ scrollBehavior: 'smooth' }} data-scroll-behavior="smooth">

      <body 
         className={`
          ${InknutAntiqua.variable} ${SourceSerif4.variable} ${NotoSerifJP.variable}
            flex flex-col min-h-screen main-font
          `}
      >{/* flex flex-col min-h-screen - helps footer to stay at the bottom x1*/}
        <NextIntlClientProvider
          locale={locale}
        >
          <Navigation />
          <SideNav /> 
          <Suspense fallback={<Loading />}>
          <main className="grow max-w-300 w-full mx-auto" >{children}</main>
          {/*flex-grow - helps footer to stay at the bottom x2*/}
          </Suspense>
          <Footer />
        </NextIntlClientProvider>

      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}