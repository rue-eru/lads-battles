import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from "react";
import { styles } from '../utils/styles';
import CharacterList from '../components/CharacterList';
import CharaListNB from '../components/CharaListNB';

export default function Home({ params }: { params: Promise<{ locale: Locale }> }) {

  // Enable static rendering
  const { locale } = use(params);
  setRequestLocale(locale); //for server components

  const tHome = useTranslations('home');

  return (
    <div className={styles.pagelayout}>
      <main className={styles.contentlayout}>
        <h1 className={styles.h1}>{tHome("intro_header")}</h1>
        <hr className={styles.divider}></hr>
        <p>{tHome("here")}</p>
        <p>{tHome("I_started_playing")}</p>
        <p>{tHome("I_cannot_say")}</p>
        <p>{tHome("at_the_moment")}</p>
        <p>{tHome("Ending")}</p>

        <div className={`font-accent uppercase border-4 border-lightgray flex-nowrap w-full text-center ${styles.textAccentShadow}`}>
          <span className="block bg-lightgray flex-1 p-2">{tHome('to_start')}</span>
            <CharacterList/>
        </div>
        <CharaListNB />
      </main>
    </div>
  );
}