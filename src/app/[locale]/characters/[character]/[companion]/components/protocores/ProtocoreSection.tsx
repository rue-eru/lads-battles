import { CharacterId, charactersData } from "@/app/utils/loaders/character-data-loader";
import { CharaDataProps } from "@/app/utils/interfaces-data";
import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import ProtocoreTable from "./ProtocoreTable";
import ProtocoreTypesTable from "./ProtocoreTypesTable";
import { TextRenderer } from "../glossary/TextRenderer";

export default function ProtocoreSection ({character, companion}: CharaDataProps) {
    const charaData = charactersData[character as CharacterId];
    const companionData = charaData.companions.find(comp => comp.id === companion);

    const t = useTranslations('protocores');


    return (
        <div className={styles.contentlayout}>
            <h1 className={styles.sectionH1}>{t('header')}</h1>
            <hr className={styles.divider}></hr>

            {/*protocore names and visual representation*/}
            <ProtocoreTypesTable 
                stellactrum={companionData?.stellactrum}
            />
                {/*companionId={companionData?.id} */ }


            {/* basic info that is true for all companions that's why it is static*/}
            <ul className="w-full list-['—'] list-inside">
                    <li> {t('solarCardsInfo')}</li>
                    <li> {t('lunarCardsInfo')}</li>
                    <li> 
                        <TextRenderer>{t('critBuildsInfo')}</TextRenderer>
                    </li>
                    <li> 
                        <TextRenderer>{t('OathInfo')}</TextRenderer>
                        *
                    </li>
                    <li> 
                        <TextRenderer>{t('energyInfo')}</TextRenderer>
                        *
                    </li>
            </ul>
            <span>* {t('energyNB')}</span>


            {/*what stats to choose on your protocores based on companion type*/}
            { companionData?.type === "solar" ? (
                <>
                    <span>{t('introSolar')}</span>
                </>

            ) :  (
                <>
                    <span>
                        <TextRenderer>{t('introStandart')}</TextRenderer>
                    </span>
                </>


            )}

            <ProtocoreTable character={character} companion={companion}/>

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