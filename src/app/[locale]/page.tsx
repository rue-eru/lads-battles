import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from "react";
import { styles } from '../utils/styles';
import CharacterList from '../components/CharacterList';

export default function Home({ params }: { params: Promise<{ locale: Locale }> }) {

  // Enable static rendering
  const { locale } = use(params);
  setRequestLocale(locale); //for server components

  const tHome = useTranslations('home');
  const tLayout = useTranslations('layout');

  return (
    <div className={styles.pagelayout}>
      <main className={styles.contentlayout}>
        <h1 className={styles.h1}>{tHome("intro header")}</h1>
        <hr className={styles.divider}></hr>
        <p>{tHome("here")}</p>
        <p>{tHome("I started playing")}</p>
        <p>{tHome("I cannot say")}</p>
        <p>{tHome("At the moment")}</p>
        <p>{tHome("Ending")}</p>

        <div className="font-inknut uppercase border-4 border-lightgray flex-nowrap w-full text-center">
          <span className="block bg-lightgray flex-1 p-2">{tHome('to start')}</span>
            <CharacterList/>
        </div>
        <span className='-mt-8'>*{tLayout("NB")}</span>

      </main>
    </div>
  );
}