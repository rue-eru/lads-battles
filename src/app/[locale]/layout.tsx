import type { Metadata } from 'next';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Geist, Geist_Mono, Inknut_Antiqua } from "next/font/google";
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SideNav from '../components/side-nav/SideNav';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'fallback'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const InknutAntiqua = Inknut_Antiqua({
  variable: "--font-inknut-antiqua",
  subsets: ['latin'],
  weight: ["300" , "400" , "500" , "600" , "700" , "800" , "900"],
  display: 'swap'
});

//fix l10n
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('layout');
  return {
    title: t('title'),
    description: t('description'),
  };
};

export default async function RootLayout({
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
    <html lang={locale}>
      <body 
         className={`
          ${geistSans.variable} ${geistMono.variable} ${InknutAntiqua.variable} 
            flex flex-col min-h-screen
          `}
      >{/* flex flex-col min-h-screen - helps footer to stay at the bottom x1*/}
        <NextIntlClientProvider>
          <Navigation />
          <SideNav />
          <main className="grow" >{children}</main>
          {/*flex-grow - helps footer to stay at the bottom x2*/}
          <Footer />
        </NextIntlClientProvider>

      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}