'use client'

import { GameplaySectionProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { styles } from "@/app/utils/styles";
import  StandardGameplayCard from "./StandardGameplayCard";

export default function GameplaySection ({
    character, companion
}: GameplaySectionProps) {

    const tGeneral = useTranslations('gameplay.general')

    return (
        <div className={styles.contentlayout}>
            <h1 className={styles.sectionH1}>{tGeneral('header')}</h1>
            <hr className={styles.divider}></hr>

            <StandardGameplayCard 
                character={character}
                companion={companion}
            />
        </div>
    )
}