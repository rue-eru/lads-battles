import { CharaDataProps } from "@/app/utils/interfaces-data";
import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import SkillCard from "./SkillCard";
import { getSkills } from "@/app/utils/loaders/skills-loader";

export default function HisSkillsTable ({character, companion } : CharaDataProps) { 
    const t = useTranslations('skills.hisSection');

    const SkillsData = getSkills(character as any, companion);

    if (!SkillsData?.his_skills) {
        return <p>{t('no-data')}</p>
    }

    const {
        support_skill,
        resonance_skill,
        ardent_oath,
        passive_skill
    } = SkillsData.his_skills

// dont forget to return term
    return (
        <div className="py-12">
            <h1 className={styles.h1Skills}>{t('header')}</h1>
            <table className=" w-full border-collapse">
                <tbody>
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/support_skill.png`}
                        nameKey={support_skill.name_key}
                        label={t('support_skill')}
                        cooldown={support_skill.cooldown as any}
                        descriptionKey={support_skill.description_key as any}
                        terms={support_skill.terms}
                        id="supportSkill"
                    />
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/resonance_skill.png`}
                        nameKey={resonance_skill.name_key}
                        label={t("resonance_skill")}
                        cooldown={resonance_skill.cooldown as any}
                        cost={resonance_skill.cost as any}
                        descriptionKey={resonance_skill.description_key as any}
                        terms={resonance_skill.terms}
                        id="resonanceSkill"
                    />
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/ardent_oath.png`}
                        nameKey={ardent_oath.name_key}
                        label={t("ardent_oath")}
                        descriptionKey={ardent_oath.description_key as any}
                        terms={ardent_oath.terms}
                        id="ardentOath"
                    />
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/passive_skill.png`}
                        nameKey={passive_skill.name_key}
                        label={t("passive_skill")}
                        descriptionKey={passive_skill.description_key as any}
                        terms={passive_skill.terms}
                        id="hisPassiveSkill"
                    />
                </tbody>
            </table>
        </div>
    )
}