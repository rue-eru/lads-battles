'use client'

import { CharaDataProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { styles } from "@/app/utils/styles";
import HisSkillsTable from "./HisSkillsTable";
import MySkillsTable from "./MySkillsTable";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";

export default function SkillWeaponSection ({character, companion}: CharaDataProps) {

    const t = useTranslations('skills');
    const { isRu } = useCurrentLanguage();

    return (
        <div className={styles.contentlayout} id="skillWeaponSection">
            <h1 className={styles.sectionH1}>
                {t('header')}
                {isRu
                    ? <span className={styles.headerEN}>{t('headerEN')}</span>
                    : ''
                }
            </h1>
            <hr className={styles.divider}></hr>
            <HisSkillsTable character={character} companion={companion} /> 
            <MySkillsTable character={character} companion={companion} />
        </div>
    )
}