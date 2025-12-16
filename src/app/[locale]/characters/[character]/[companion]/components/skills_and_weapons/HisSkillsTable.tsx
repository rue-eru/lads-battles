import { CharaDataProps } from "@/app/utils/interfaces-data";
import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import { CharacterId, charactersData } from "@/app/utils/character-data-loader";
import SkillCard from "./SkillCard";

export default function HisSkillsTable ({character, companion } : CharaDataProps) { 
    const t = useTranslations('skills.hisSection');
    const charaData = charactersData[character as CharacterId];
    {/*const companionData = charaData.companions.find(comp => comp.id === companion);*/}

    return (
        <div>
            <h1 className={styles.h1}>{t('header')}</h1>
            <SkillCard 
                icon={`/images/companions/${character}/${companion}/${}.png`}
                nameKey={}
                label={}
                cooldown={}
                cost={}
                descriptionKey={}
                terms={}
            />
        </div>
    )
}