'use client'

import { GameplaySectionProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { styles } from "@/app/utils/styles";
import  StandardGameplayCard from "./StandardGameplayCard";
import SolarGameplayCard from "./SolarGameplayCard";
import { getGameplayGuide } from "@/app/utils/loaders/gameplay-loader";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";

export default function GameplaySection ({
    character, companion
}: GameplaySectionProps) {

    const { isRu } = useCurrentLanguage();

    const tGeneral = useTranslations('gameplay.general')

    const guide = getGameplayGuide(character as any, companion);

    if (!guide) {
        return <p className="text-red-500 font-bold italic">{tGeneral('no-data')}</p>
    }

    if (!('blocks' in guide)) {
        throw new Error(tGeneral('no-data'));

    }

    return (
        <div className={styles.contentlayout} id="gameplaySection">
            <h1 className={styles.sectionH1}>
                {tGeneral('header')}
                {isRu 
                    ? <span className={styles.headerEN}>{tGeneral('headerEN')}</span>
                    : ''
                }
            </h1>
            <hr className={styles.divider}></hr>

            {guide.type === 'solar' ? (
                <>
                    <SolarGameplayCard 
                        guide={guide}
                    />
                </>
            ) : (
                <>
                    <StandardGameplayCard 
                        guide={guide}
                    />               
                </>
            )}

        </div>
    )
}