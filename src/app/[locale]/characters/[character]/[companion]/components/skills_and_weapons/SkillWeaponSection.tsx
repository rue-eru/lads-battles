'use client'

import { CharaDataProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { styles } from "@/app/utils/styles";
import HisSkillsTable from "./HisSkillsTable";
import MySkillsTable from "./MySkillsTable";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";
import { useEffect, useState } from "react";
import SyncSkillsTable from "./SyncSkillsTable";

export default function SkillWeaponSection ({character, companion}: CharaDataProps) {

    const t = useTranslations('skills');
    const { isRu } = useCurrentLanguage();
    const [hasSync, setHasSync] = useState(false);

    useEffect(() => {
        // import the skills data dynamically to check if there is a new sync skill set
        const checkSync = async () => {
            try {
                const skillsModule = await import(`@/data/skills/${character}/${companion}.json`);
                const skillsData = skillsModule.default;
                
                if (skillsData.sync_skills && Object.keys(skillsData.sync_skills).length > 0) {
                    setHasSync(true);
                }
            } catch (error) {
                setHasSync(false);
            }
        };
        
        checkSync();
    }, [character, companion]);

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
            {hasSync && (<>
                <SyncSkillsTable character={character} companion={companion} />
            </>)}
            <MySkillsTable character={character} companion={companion} />
        </div>
    )
}