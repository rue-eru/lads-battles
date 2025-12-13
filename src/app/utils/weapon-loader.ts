import {StandardWeapon} from "@/app/utils/types-weapon";

import standardWeapons from '@/data/weapons/standard-weapons.json'

export const standardWeaponsData = standardWeapons as Record<string, StandardWeapon>;

export type WeaponType = keyof typeof standardWeaponsData;

export function getStandardWeapon(type: WeaponType): StandardWeapon | undefined {
    return standardWeaponsData[type]
}