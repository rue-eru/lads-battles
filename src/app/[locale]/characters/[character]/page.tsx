import Link from 'next/link';
import { Locale } from "next-intl";
import { type CharacterId, charactersData } from "@/app/utils/loaders/character-data-loader";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CharacterCard from "@/app/components/CharacterCard";
import { styles } from "@/app/utils/styles";

export default async function CharacterCompanionList({
    params
} : {
    params: Promise<{ character: CharacterId; locale: Locale }>
}) {
    const  { character, locale } = await params;
    setRequestLocale(locale);

    const tCompanions = await getTranslations('characters.companions');
    const tCharas = await getTranslations('characters.chNames');

    let characterName;
    try {
        //as any for now
        characterName = tCharas(character as any);
    } catch (error) {
        //character as const returns an error
        characterName = String(character).charAt(0).toUpperCase()+ String(character).slice(1);
    }
    const possesive = characterName.endsWith("s") ? "'" : "'s";

    const characterData = charactersData[character];

    return (
        <div className={styles.pagelayout}>
            <div className={styles.contentlayout}>
                <h1 className={styles.h1}>
                    {/*as any for now*/}
                    {tCharas(character as any)}{possesive} {tCompanions('companion-list-title')}
                </h1>
                 <hr className={styles.divider}></hr>


                <div className="grid grid-cols-2 md:grid-cols-3 p-6 gap-6 w-full font-inknut uppercase text-wrap text-[16px] content-center">
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