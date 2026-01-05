import Link from 'next/link';
import { Locale } from "next-intl";
import { type CharacterId, charactersData } from "@/app/utils/loaders/character-data-loader";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CharacterCard from "@/app/components/CharacterCard";
import { styles } from "@/app/utils/styles";
import CompanionListH1WordOrder from '@/app/components/side-nav/CompanionListH1WordOrder';

export default async function CharacterCompanionList({
    params
} : {
    params: Promise<{ character: CharacterId; locale: Locale }>
}) {
 
    const  { character, locale } = await params;
    setRequestLocale(locale);

    const tCompanions = await getTranslations('characters.companions');

    const characterData = charactersData[character];

    return (
        <div className={styles.pagelayout}>
            <div className={styles.contentlayout}>

                <CompanionListH1WordOrder character={character}/>
                
                <hr className={styles.divider}></hr>


                <div className="grid grid-cols-2 md:grid-cols-3 p-6 gap-6 w-full font-accent uppercase text-wrap text-[16px] content-center">
                    {characterData.companions.map((companion) => (
                    <Link
                      key={companion.id}
                      href={`/${locale}/characters/${character}/${companion.id}`}
                    >
                            <CharacterCard 
                                titleId={tCompanions(companion.nameKey as any)}
                                imageSize={220}
                                imgRoot={`companions/${character}/icons/${companion.id}.jpg`}
                                className={styles.charaIconStyle}
                            />
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}