'use client'

import { CharaDataProps } from "@/app/utils/interfaces-data";
import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { standardWeaponsData } from "../../data/standard-weapons-data";
import { WeaponCard } from "./WeaponCard";

export default function StandardWeapons ({ character, companion }: CharaDataProps) {
    const t = useTranslations('weapons.standard_weapons');
    const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null);
        const [expandedWeapon, setExpandedWeapon] = useState<string | null>(null);

        const handleWeaponClick = (weaponId: string) => {
            if (expandedWeapon === weaponId) {
                setExpandedWeapon(null);
            } else {
                setExpandedWeapon(weaponId);
                setSelectedWeapon(weaponId);
            }
        }


    return (
        <div>
            <h2 className={styles.h1}>{t('header')}</h2>

            <div className="grid gap-4 md-grid-cols-4 grid-cols-2">
                {Object.entries(standardWeaponsData).map(([weaponId, weaponData]) => (
                    <WeaponCard 
                        key={weaponId}
                        weaponId={weaponId}
                        weaponData={weaponData}
                        isExpanded={expandedWeapon === weaponId}
                        onClick={() => handleWeaponClick(weaponId)}
                        t={t}
                    />
                ))}

            </div>
        </div>
    )

}