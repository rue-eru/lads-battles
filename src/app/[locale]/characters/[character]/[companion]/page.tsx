import { Locale } from 'next-intl';
import { styles } from "@/app/utils/styles";
import Banner from './components/companion_basic_info/Banner';
import { type CompanionId, type CharacterId, charactersData } from '@/app/utils/character-data-loader';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CompanionInfoTable from './components/companion_basic_info/CompanionInfoTable';
import ProtocoreSection from './components/protocores/ProtocoreSection';
import SkillWeaponSection from './components/skills_and_weapons/SkillWeaponSection';

export default async function CompanionPage ( {params} : {
  params: Promise<{character: CharacterId; companion: CompanionId; locale: Locale}>
}) {

    const { character, companion, locale } = await params;
    setRequestLocale(locale);

    const tCharas = await getTranslations('characters.chNames');
    const tCompanions = await getTranslations('characters.companions');

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
                {/* AS ANY FOR CHARACTERS FOR TS TYPES*/}
                <h1 className={styles.h1}>{tCharas(character as any)}: {tCompanions(companionData.nameKey as any)}</h1> 
                <Banner character={character as any} companion={companion} />
                <CompanionInfoTable character={character as any} companion={companion}/>
                <ProtocoreSection character={character as any} companion={companion}/>
                <SkillWeaponSection character={character as any} companion={companion} />
            </div>
        </div>
    )
}