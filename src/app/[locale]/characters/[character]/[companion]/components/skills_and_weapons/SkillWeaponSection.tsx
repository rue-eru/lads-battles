import { CharaDataProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { styles } from "@/app/utils/styles";
import HisSkillsTable from "./HisSkillsTable";
import MySkillsTable from "./MySkillsTable";

export default function SkillWeaponSection ({character, companion}: CharaDataProps) {

    const t = useTranslations('skills');

    return (
        <div className={styles.contentlayout} id="skillWeaponSection">
            <h1 className={styles.sectionH1}>{t('header')}<span className={styles.headerEN}>{t('headerEN')}</span></h1>
            <hr className={styles.divider}></hr>
            <HisSkillsTable character={character} companion={companion} /> 
            <MySkillsTable character={character} companion={companion} />
        </div>
    )
}