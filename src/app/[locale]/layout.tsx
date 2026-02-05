import type { Metadata } from 'next';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SideNav from '../components/side-nav/SideNav';
import { Suspense } from 'react';
import Loading from './loading';
import { InknutAntiqua, NotoSerifJP, SourceSerif4 } from '../../../public/fonts';

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
             ${NotoSerifJP.variable} ${InknutAntiqua.variable} ${SourceSerif4.variable}
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