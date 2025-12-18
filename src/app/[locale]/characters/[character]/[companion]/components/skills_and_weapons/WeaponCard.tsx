'use client'

import { WeaponCardProps } from "@/app/utils/interfaces-data";
import Image from "next/image";
import SkillCard from "./SkillCard";
import { useTranslations } from "next-intl";

export function WeaponCard ({
    weaponId,
    weaponData,
    isExpanded,
    onToggle,
}: WeaponCardProps) {

    const t = useTranslations('weapons.standard_weapons')

    return (
        <div>
            <div className="hidden mx:visible text-[10px]">
                <span>Click to expand AND STYLE LATER</span>
            </div>
            {/*weapon header: image + title / works as a button to expand content*/}
            <button
                onClick={onClick}
                className="w-full flex flex-col items-center gap-2 cursor-pointer"
            >
                <div className="w-16 h-16 relative">
                    <Image 
                        src={`standard_weapons/${weaponId}/icon.png`}
                        alt={t('weaponData.name_key')}
                        width={64}
                        height={64}
                        className="object-cover"
                    />
                    <h3 className={`text-center font-inknut ${ isExpanded
                        ? 'bg-pink-400'
                        : ''
                    }`}>
                        {t(weaponData.name_key)}
                    </h3>
                </div>

            </button>

            {/*expand content goes here*/}
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div>
                    <SkillCard 
                        icon={`standard_weapons/${weaponId}/basic_attack.png`}
                        nameKey={weaponData.skills.basic_attack.name_key}
                        label="basic_attack"
                        descriptionKey={weaponData.skills.basic_attack.descriptionKey}
                        terms={weaponData.skills.basic_attack.terms}
                        compact={true}
                    />
                    <SkillCard 
                        icon={`standard_weapons/${weaponId}/passive_skill.png`}
                        nameKey={weaponData.skills.passive_skill.name_key}
                        label="passive_skill"
                        descriptionKey={weaponData.skills.passive_skill.descriptionKey}
                        terms={weaponData.skills.passive_skill.terms}
                        compact={true}
                    />
                    <SkillCard 
                        icon={`standard_weapons/${weaponId}/active_skill.png`}
                        nameKey={weaponData.skills.active_skill.name_key}
                        label="active_skill"
                        descriptionKey={weaponData.skills.active_skill.descriptionKey}
                        terms={weaponData.skills.active_skill.terms}
                        compact={true}
                    />
                </div>

                <div className="">
                    <div>{t(weaponData.about)}</div>
                </div>
            </div>
        </div>
    )
}