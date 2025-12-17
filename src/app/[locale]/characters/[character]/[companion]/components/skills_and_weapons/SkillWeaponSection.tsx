import { CharaDataProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { CharacterId, charactersData } from "@/app/utils/character-data-loader";
import { styles } from "@/app/utils/styles";
import HisSkillsTable from "./HisSkillsTable";
import MySkillsTable from "./MySkillsTable";

export default function SkillWeaponSection ({character, companion}: CharaDataProps) {
    const charaData = charactersData[character as CharacterId];

    const t = useTranslations('skills');

    return (
        <div className={styles.contentlayout}>
            <h1 className={styles.sectionH1}>{t('header')}</h1>
            <hr className={styles.divider}></hr>
            <HisSkillsTable character={character} companion={companion} /> 
            <MySkillsTable character={character} companion={companion} />
        </div>
    )
}