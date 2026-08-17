import { CharaDataProps } from "@/app/utils/interfaces-data";
import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import SkillCard from "./SkillCard";
import { getSkills } from "@/app/utils/loaders/skills-loader";

export default function SyncSkillsTable ({character, companion } : CharaDataProps) { 
    const t = useTranslations('skills.syncSection');

    const SkillsData = getSkills(character as any, companion);

    if (!SkillsData?.sync_skills) {
        return <p>{t('no-data')}</p>
    }

    const {
        basic_attack,
        active_skill_1,
        active_skill_2,
        active_skill_3,
        passive_skill
    } = SkillsData.sync_skills

    return (
        <div className="py-12">
            <h1 className={styles.h1Skills}>{t('header')}</h1>
            <p>{t('intro')}</p>
            <table className=" w-full border-collapse">
                <tbody>
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/sync/basic_attack.png`}
                        nameKey={basic_attack.name_key}
                        label={t('basic_attack')}
                        descriptionKey={basic_attack.description_key as any}
                        id="basic_attack"
                    />
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/sync/active_skill_1.png`}
                        nameKey={active_skill_1.name_key}
                        label={t("active_skill_1")}
                        cooldown={active_skill_1.cooldown as any}
                        descriptionKey={active_skill_1.description_key as any}
                        id="active_skill_1"
                    />
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/sync/active_skill_2.png`}
                        nameKey={active_skill_2.name_key}
                        label={t("active_skill_2")}
                        cost={active_skill_2.cost as any}
                        descriptionKey={active_skill_2.description_key as any}
                        id="active_skill_2"
                    />
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/sync/active_skill_3.png`}
                        nameKey={active_skill_3.name_key}
                        label={t("active_skill_3")}
                        cooldown={active_skill_3.cooldown as any}
                        descriptionKey={active_skill_3.description_key as any}
                        id="active_skill_3"
                    />
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/sync/passive_skill.png`}
                        nameKey={passive_skill.name_key}
                        label={t("passive_skill")}
                        descriptionKey={passive_skill.description_key as any}
                        id="passive_skill"
                    />                
                </tbody>
            </table>
        </div>
    )
}