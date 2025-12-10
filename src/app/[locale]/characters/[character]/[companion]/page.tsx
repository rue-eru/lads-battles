import { Locale } from 'next-intl';
import { styles } from "@/app/utils/styles";
import Banner from './components/Banner';
import { type CompanionId, type CharacterId, charactersData } from '@/app/[locale]/data/characters-data';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CompanionInfoTable from './components/CompanionInfoTable';
import ProtocoreSection from './components/ProtocoreSection';
import SkillWeaponSection from './components/SkillWeaponSection';

export default async function CompanionPage ( {params} : {
  params: Promise<{character: CharacterId; companion: CompanionId; locale: Locale}>
}) {

    const { character, companion, locale } = await params;
    setRequestLocale(locale);

    const tCharas = await getTranslations('chNames');
    const tCompanions = await getTranslations('companions');

    const characterData = charactersData[character];
    const companionData = characterData.companions.find(comp => comp.id === companion);

    if (!companionData) {
      return (
        <div className={styles.contentlayout}>
          <div className={styles.contentlayout}>
            <h1 className={styles.h1}>Companion Not Found</h1>
          </div>
        </div>
      )
    }
    return (
        <div className={styles.pagelayout}>
            <div className={styles.contentlayout}>
                <h1 className={styles.h1}>{tCharas(character)}: {tCompanions(companionData.nameKey as any)}</h1> 
                <Banner character={character} companion={companion} />
                <CompanionInfoTable character={character} companion={companion}/>
                <ProtocoreSection character={character} companion={companion}/>
                <SkillWeaponSection character={character} companion={companion} />
            </div>
        </div>
    )
}