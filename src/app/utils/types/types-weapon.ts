export interface WeaponSkill {
    name_key: string;
    description_key: string;
    cooldown?: string;
    cost?: string;
    rich_description?: {
        text: string;
        links?: Array<{
            term: string;
            href: string;
            tooltip?: string
        }>;
        highlights?: string[];
    };
}

export interface StandardWeapon {
    name_key: string;
    about: string;
    skills: {
        basic_attack: WeaponSkill;
        passive_skill: WeaponSkill;
        active_skill: WeaponSkill;
    }
}

export type StandardWeaponsData = Record<string, StandardWeapon>;