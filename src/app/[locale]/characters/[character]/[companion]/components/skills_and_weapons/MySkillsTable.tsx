import { CharaDataProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { getGameplay } from "@/app/utils/gameplay-loader";
import { styles } from "@/app/utils/styles";
import Image from "next/image";
import SkillCard from "./SkillCard";
import StandardWeapons from "./StandardWeapons";


export default function MySkillsTable( {character, companion}: CharaDataProps) {

    const tCommon = useTranslations('skills.mySection');
    const tData = useTranslations();
    const tCharaName = useTranslations(`characters.companions.${character}`)
    const gameplayData = getGameplay(character as any, companion);

    if (!gameplayData) {
        return <p>{tCommon('no-data')}</p>
    }

    if (!gameplayData?.my_skills) {

        return (
            <div>
                <h2 className={styles.h1}>{tCommon('header')}</h2>
                <p className="mt-6 italic">{tCommon('not_limited_companion_warning')}</p>
            </div>
        )
    }

    const {
        weapon_key,
        basic_attack,
        passive_skill,
        active_skill
    } = gameplayData.my_skills 
    
    return (
        <div className="py-12">
            <h2 className={styles.h1}>{tCommon('header')}</h2>

            <p className="pt-12">{tCommon('intro')}</p>

            <div className="flex items-center  gap-4 p-6">
                <div className="relative">
                    <Image 
                        src={`/images/companions/${character}/gameplay/${companion}/weapon.png`}
                        alt={tData(weapon_key)}
                        width={140}
                        height={140}
                        className="object-cover rounded"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-inknut mb-3">{tData(weapon_key)}</h3>
                    <p className="text-lg  font-inknut">{tCharaName(`${companion}` as any)}{tCommon('exclusive_weapon')}</p>
                </div>
            </div>

            <table className=" w-full border-collapse">
                <tbody>
                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/my_basic_attack.png`}
                        nameKey={basic_attack.name_key}
                        label={tCommon('basic_attack')}
                        descriptionKey={basic_attack.description_key as any}
                        terms={basic_attack.terms}
                    />

                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/my_passive_skill.png`}
                        nameKey={passive_skill.name_key}
                        label={tCommon('passive_skill')}
                        descriptionKey={passive_skill.description_key as any}
                        terms={passive_skill.terms}
                    />

                    <SkillCard 
                        icon={`/images/companions/${character}/gameplay/${companion}/my_active_skill.png`}
                        nameKey={active_skill.name_key}
                        label={tCommon('active_skill')}
                        descriptionKey={active_skill.description_key as any}
                        cooldown={active_skill.cooldown as any}
                        cost={active_skill.cost as any}
                        terms={active_skill.terms}
                    />
                </tbody>
            </table>
            

            {/*<StandardWeapons character={character} companion={companion} />*/}

        </div>
    )

}