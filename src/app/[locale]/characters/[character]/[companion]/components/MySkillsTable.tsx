import { CharaDataProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { gameplayData } from "../data/gameplay-data";
import { styles } from "@/app/utils/styles";
import Image from "next/image";
import SkillCard from "./SkillCard";

export default function MySkillsTable( {character, companion}: CharaDataProps) {

    const t = useTranslations('skills');
    const chNamesT = useTranslations('characters.chNames');


    const getCompanionSkills = (character: string, companion: string) => {
        const characterData = gameplayData[character as keyof typeof gameplayData];
        if (!characterData) return null;

        return characterData[companion as keyof typeof characterData]?.my_skills|| null;
    }

    const mySkills = getCompanionSkills(character, companion);

    if (!mySkills) return null;

    return (
        <div>
            <h2 className={styles.h1}>{t('mySection.header')}</h2>

            <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative">
                    <Image 
                        src={`companions/${character}/gameplay/${companion}/weapon.png`}
                        alt={t(mySkills.weapon_key)} //check again
                        width={64}
                        height={64}
                        className="object-cover rounded"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-inknut">{t(mySkills.weapon_key)}</h3>
                    <p className="text-xl font-inknut">{chNamesT(`${companion}` as any)}{t('mySection.exclusive_weapon')}</p>
                </div>
            </div>

            <div>
                <SkillCard 
                    icon={`companions/${character}/gameplay/${companion}/my_basic_attack.png`}
                    nameKey={mySkills.basic_attack.name_key}
                    label="basic_attack"
                    descriptionKey={mySkills.basic_attack.descriptionKey}
                    terms={mySkills.basic_attack.terms || []}
                />

                <SkillCard 
                    icon={`companions/${character}/gameplay/${companion}/my_active_skill.png`}
                    nameKey={mySkills.active_skill.name_key}
                    label="active_skill"
                    descriptionKey={mySkills.active_skill.descriptionKey}
                    terms={mySkills.active_skill.terms || []}
                />

                <SkillCard 
                    icon={`companions/${character}/gameplay/${companion}/my_my_passive_skill.png`}
                    nameKey={mySkills.passive_skill.name_key}
                    label="passive_skill"
                    descriptionKey={mySkills.passive_skill.descriptionKey}
                    terms={mySkills.passive_skill.terms || []}
                />
            </div>
        </div>
    )

}