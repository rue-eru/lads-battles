'use client'

import { CharacterId, charactersData } from "@/app/utils/loaders/character-data-loader";
import { CharaDataProps } from "@/app/utils/interfaces-data";
import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import ProtocoreTable from "./ProtocoreTable";
import ProtocoreTypesTable from "./ProtocoreTypesTable";
import { TextRenderer } from "../glossary/TextRenderer";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";
import { useEffect, useState } from "react";
import { getStellactrumColor, type StellactrumColor } from "@/app/utils/game/stellactrum-utils";

export default function ProtocoreSection ({character, companion}: CharaDataProps) {
    const charaData = charactersData[character as CharacterId];
    const companionData = charaData.companions.find(comp => comp.id === companion);

    const t = useTranslations('protocores');
    const { isRu, isJa } = useCurrentLanguage();

    const [color, setColor] = useState<StellactrumColor | null>(null);

    useEffect(() => {
      setColor(getStellactrumColor(companionData?.stellactrum));
    }, []);

    if (!color) return null;


    return (
        <div className={styles.contentlayout} id="protocoreSection">
            <h1 className={styles.sectionH1}>
                {t('header')}
                {isRu 
                    ? <span className={styles.headerEN}>{t('headerEN')}</span>
                    : ''
                }
                
            </h1>
            <hr className={styles.divider}></hr>

            {/*protocore names and visual representation*/}
            <ProtocoreTypesTable 
                stellactrum={color}
            />
                {/*companionId={companionData?.id} */ }


            {/* basic info that is true for all companions that's why it is static*/}
            <ul className="w-full list-['∘'] list-outside">
                    <li className="pl-2">
                        <TextRenderer>{t('solarCardsInfo')}</TextRenderer>
                    </li>
                    <li className="pl-2">
                        <TextRenderer>{t('lunarCardsInfo')}</TextRenderer>
                    </li>
                    <li className="pl-2"> 
                        <TextRenderer>{t('critBuildsInfo')}</TextRenderer>
                    </li>
                    <li className="pl-2"> 
                        <TextRenderer>{t('OathInfo')}</TextRenderer>
                        {isJa ? "※": "*"}
                    </li>
                    <li className="pl-2"> 
                        <TextRenderer>{t('energyInfo')}</TextRenderer>
                        {isJa ? "※": "*"}
                    </li>
            </ul>
            <p className="-mt-8 text-right w-full italic">{isJa ? "※ ": "* "}{t('energyNB')}</p>

            <span>                        
                <TextRenderer>{t('stellacrtumMatchInfo')}</TextRenderer>
            </span>


            {/*what stats to choose on your protocores based on companion type*/}
            { companionData?.type === "solar" ? (
                <>
                    <span>{t('introSolar')}</span>
                </>

            ) :  ('')}

            <ProtocoreTable character={character} companion={companion} stellactrum={color}/>

            { companionData?.type === "solar" ? (
                <>
                    <span>{t(`substatsChoice.solar.intro`)}{t(`substatsChoice.solar.${companion}`)}</span>               
                </>

            ) :  (
                <>
                    <span>{t('substatsChoice.basic')}</span>               
                </>


            )}


        </div>
    )
}