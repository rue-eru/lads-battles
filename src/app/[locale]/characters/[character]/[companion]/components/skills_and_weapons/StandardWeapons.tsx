'use client'

import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { standardWeaponsData } from "@/app/utils/loaders/weapon-loader";
import Image from "next/image";
import { TextRenderer } from "../glossary/TextRenderer";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";

export default function StandardWeapons () {
    const tWeapons = useTranslations('weapons');
    const tSkills = useTranslations('skills.mySection')
    const tGeneral = useTranslations('skills.general');
    const {isRu, isJa} = useCurrentLanguage();

    const [expandedWeapon, setExpandedWeapon] = useState<string | null>(null);

    const weaponData = standardWeaponsData[expandedWeapon as keyof typeof standardWeaponsData]


    return (
        <div className="py-12 -mb-28">
            <h2 className={styles.h1}>{tWeapons('standard_weapons.header')}</h2>

            <div>

                {/*represents an array of weapon images that can be expanded on toggle*/}
                <div className="flex flex-wrap justify-center sm:justify-between py-6 gap-x-0.5 sm:gap-2">
                {Object.entries(standardWeaponsData).map(([weaponId, weaponData]) => (
                    <button
                        key={weaponId}
                        onClick={() =>setExpandedWeapon(
                            expandedWeapon === weaponId ? null : weaponId
                        )}
                        className="rounded-xl transition-all font-accent"
                    >
                        <div className="relative cursor-pointer">
                            <Image 
                                src={`/images/standard_weapons/${weaponId}/icon.png`}
                                alt={`${!isJa ? tWeapons('image_alt') : ""}${tWeapons(weaponData.name_key)}${isJa ? tWeapons('image_alt') : ""}`}
                                width={150}
                                height={150}
                                priority
                                className={`object-contain w-35 h-35 ${
                                    expandedWeapon === weaponId
                                        ? 'border-pink-400 border-3 rounded-full'
                                        : ''
                                }
                                }    
                                `}
                            />

                            <div className=" flex justify-center mt-4">

                                <div className={`relative flex justify-center ${isJa ? "w-20": "w-5"}`}>
                                    <p
                                        className={
                                            expandedWeapon === weaponId
                                            ? 'text-pink-400'
                                            : ''
                                        }
                                    >{tWeapons(weaponData.name_key)}
                                    </p>
                                </div>

                            </div>
                        </div>


                    </button>
                ))}
                </div>

                {/*clicking the button above expands the chosen weapon's skills info*/}
                {expandedWeapon && weaponData && (
                    <div className="mt-6" id={expandedWeapon}>

                        <table>
                            <tbody>

                                {/*basic attack data*/}
                                <tr id="stWeaponBasic">
                                    <td className={styles.imgSkillWidth}>
                                        <div className={styles.imgSkillCentered}>
                                            <Image 
                                                src={`/images/standard_weapons/${expandedWeapon}/basic_attack.png`}
                                                alt={tWeapons(weaponData.skills.basic_attack.name_key)}
                                                width={80}
                                                height={80}
                                                className={styles.skillRoundImg}
                                                priority
                                            />
                                        </div>
                                    </td>
                                    <td className={styles.skillDescriptionDiv}>
                                        <div className={styles.skillInfoBubbleDiv}>
                                            <h3>{tWeapons(weaponData.skills.basic_attack.name_key)}</h3>
                                            <span className={styles.skillsPinkBubble}>
                                                {tSkills('basic_attack')}
                                            </span>
                                        </div>
                                        <p>
                                            <TextRenderer>{tWeapons(weaponData.skills.basic_attack.description_key)}</TextRenderer>
                                        </p>
                                    </td>
                                </tr>
                                    
                                {/*passive skill data*/}
                                <tr id="stWeaponPassive">
                                    <td className={styles.imgSkillWidth}>
                                        <div className={styles.imgSkillCentered}>
                                            <Image 
                                                src={`/images/standard_weapons/${expandedWeapon}/passive_skill.png`}
                                                alt={tWeapons(weaponData.skills.passive_skill.name_key)}
                                                width={80}
                                                height={80}
                                                className={styles.skillRoundImg}
                                                priority
                                            />
                                        </div>
                                    </td>
                                    <td className={styles.skillDescriptionDiv}>
                                        <div className={styles.skillInfoBubbleDiv}>
                                            <h3>{tWeapons(weaponData.skills.passive_skill.name_key)}</h3>
                                            <span className={styles.skillsPinkBubble}>
                                                {tSkills('passive_skill')}
                                            </span>
                                        </div>
                                        <p>
                                            <TextRenderer>{tWeapons(weaponData.skills.passive_skill.description_key)}</TextRenderer>
                                        </p>
                                    </td>
                                </tr>

                                {/*active skill data*/}
                                <tr id="stWeaponActive">
                                    <td className={styles.imgSkillWidth}>
                                        <div className={styles.imgSkillCentered}>
                                            <Image 
                                                src={`/images/standard_weapons/${expandedWeapon}/active_skill.png`}
                                                alt={tWeapons(weaponData.skills.active_skill.name_key)}
                                                width={80}
                                                height={80}
                                                className={styles.skillRoundImg}
                                                priority
                                            />
                                        </div>
                                    </td>
                                    <td className={styles.skillDescriptionDiv}>
                                        <div className={styles.skillInfoBubbleDiv}>
                                            <h3>{tWeapons(weaponData.skills.active_skill.name_key)}</h3>
                                            <span className={styles.skillsPinkBubble}>
                                                {tSkills('active_skill')}
                                            </span>

                                            {weaponData.skills.active_skill.cooldown && <span className={`${styles.skillsGrayubble} ${isRu ? "lowercase" : ""}`}>{tGeneral("cooldown")} {weaponData.skills.active_skill.cooldown}{tGeneral("seconds")}</span>}
                                            {weaponData.skills.active_skill.cost && <span className={`${styles.skillsGrayubble} ${isRu ? "lowercase" : ""}`}>{tGeneral("cost")} {weaponData.skills.active_skill.cost} ◆</span>}

                                        </div>
                                        <p>
                                            <TextRenderer>{tWeapons(weaponData.skills.active_skill.description_key)}</TextRenderer>
                                        </p>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="py-6 italic">
                            <TextRenderer>{tWeapons(weaponData.about as any)}</TextRenderer>
                        </p>


                    </div>

                )}

            </div>

        </div>
    )

}

