import { Locale } from 'next-intl';
import { styles } from "@/app/utils/styles";
import Banner from './components/companion_basic_info/Banner';
import { type CompanionId, type CharacterId, charactersData } from "@/app/utils/loaders/character-data-loader";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CompanionInfoTable from './components/companion_basic_info/CompanionInfoTable';
import ProtocoreSection from './components/protocores/ProtocoreSection';
import SkillWeaponSection from './components/skills_and_weapons/SkillWeaponSection';
import GameplaySection from './components/gameplay/GameplaySection';
import { NoGuideAvailable } from './components/NoGuideAvailable';
import { getGameplayGuide } from '@/app/utils/loaders/gameplay-loader';


export default async function CompanionPage ( {params} : {
  params: Promise<{character: CharacterId; companion: CompanionId; locale: Locale}>
}) {

    const { character, companion, locale } = await params;
    setRequestLocale(locale);

    const tCharas = await getTranslations('characters.chNames');
    const tCompanions = await getTranslations('characters.companions');

    const characterData = charactersData[character];
    const companionData = characterData.companions.find(comp => comp.id === companion);
    const guide = getGameplayGuide(character as any, companion);

    const hasGuide = Boolean(guide?.type);

    if (!companionData) {
      return null
    }

    return (
        <div className={styles.pagelayout}>
            <div className={styles.contentlayout}>
                {/* AS ANY FOR CHARACTERS FOR TS TYPES*/}
                <h1 className={styles.h1}><span>{tCharas(character as any)}</span>: {tCompanions(companionData.nameKey as any)}</h1> 
                <Banner character={character as any} companion={companion} />

                  {hasGuide ? (
                    <>
                      <CompanionInfoTable character={character as any} companion={companion}/>
                      <ProtocoreSection character={character as any} companion={companion}/>
                      <SkillWeaponSection character={character as any} companion={companion} />
                      <GameplaySection character={character as any} companion={companion} />
                    </>
                  ) : (
                    <NoGuideAvailable character={character as any} companion={companion} />
                  )}

            </div>
        </div>
    )
}