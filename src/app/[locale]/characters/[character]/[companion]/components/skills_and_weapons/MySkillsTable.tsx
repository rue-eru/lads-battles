import { CharaDataProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { getSkills } from "@/app/utils/loaders/skills-loader";
import { styles } from "@/app/utils/styles";
import Image from "next/image";
import SkillCard from "./SkillCard";
import StandardWeapons from "./StandardWeapons";
import { TextRenderer } from "../glossary/TextRenderer";


export default function MySkillsTable( {character, companion}: CharaDataProps) {

    const tCommon = useTranslations('skills.mySection');
    const tData = useTranslations();
    const tCharaName = useTranslations(`characters.companions.${character}`)
    const SkillsData = getSkills(character as any, companion);

    if (!SkillsData) {
        return <p>{tCommon('no-data')}</p>
    }

    if (!SkillsData?.my_skills) {

        return (
            <div>
                <h2 className={styles.h1}>{tCommon('header')}</h2>
                <p className="mt-6 italic">{tCommon('not_limited_companion_warning')}</p>
                <StandardWeapons />

            </div>
        )
    }

    const {
        weapon_key,
        basic_attack,
        passive_skill,
        active_skill
    } = SkillsData.my_skills 
    
    return (
        <div className="pb-12">
            <h2 className={styles.h1}>{tCommon('header')}</h2>

            <p className="pt-12">
                <TextRenderer>{tCommon('intro')}</TextRenderer>
            </p>

            <div className="flex items-center gap-4 p-6">
                <div className="relative">
                    <Image 
                        src={`/images/companions/${character}/gameplay/${companion}/weapon.png`}
                        alt={tData(weapon_key)}
                        width={140}
                        height={140}
                        className="object-contain rounded sm:w-40 sm:h-40 h-30 w-30 "
                    />
                </div>
                <div className="text-left">
                    <h3 className="text-lg font-accent mb-3">{tData(weapon_key)}</h3>
                    <p className="text-lg  font-accent">{tCharaName(`${companion}` as any)}{tCommon('exclusive_weapon')}</p>
                </div>
            </div>

            <table className=" w-full border-collapse">
                <tbody>
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/my_basic_attack.png`}
                        nameKey={basic_attack.name_key}
                        label={tCommon('basic_attack')}
                        descriptionKey={basic_attack.description_key as any}
                        id="basicAttack"
                    />

                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/my_passive_skill.png`}
                        nameKey={passive_skill.name_key}
                        label={tCommon('passive_skill')}
                        descriptionKey={passive_skill.description_key as any}
                        id="myPassiveSkill"
                    />

                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/my_active_skill.png`}
                        nameKey={active_skill.name_key}
                        label={tCommon('active_skill')}
                        descriptionKey={active_skill.description_key as any}
                        cooldown={active_skill.cooldown as any}
                        cost={active_skill.cost as any}
                        id="activeSkill"
                    />
                </tbody>
            </table>
            

            <StandardWeapons />

        </div>
    )

}