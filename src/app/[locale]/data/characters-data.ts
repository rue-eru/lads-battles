export type CompanionBase = {
    readonly id: string;
    readonly nameKey: string;
    type?: 'standard' | 'solar',
    role?: string;
    scaling?: string;
    best?: string;
    specialty?: string;
    unlock?: string;
    rarity?: string;
    solarPair?: string;
    stellactrum?: 'emerald' | 'amber' | 'ruby' | 'sapphire' | 'violet' | 'pearl';
    alpha?: string;
    beta?: string;
    gamma?: string;
    delta?: string;
}

export const charactersData = {
    xavier: {
        companions: [
            { id: 'deepspace_hunter', nameKey: 'xavier.deepspace_hunter'},
            { id: 'distant_youth', nameKey: 'xavier.distant_youth'},
            { id: 'evol_police', nameKey: 'xavier.evol_police'},
            { id: 'lightseeker', nameKey: 'xavier.lightseeker'},
            { id: 'lumiere', nameKey: 'xavier.lumiere'},
            { id: 'king_of_darknight', nameKey: 'xavier.king_of_darknight'},

        ] as CompanionBase[]
    },
    zayne: {
        companions: [
            { id: 'linkon_doctor', nameKey: 'zayne.linkon_doctor'},
            { id: 'medic_of_the_arctic', nameKey: 'zayne.medic_of_the_arctic'},
            { id: 'dawnbreaker', nameKey: 'zayne.dawnbreaker'},
            { id: 'foreseer', nameKey: 'zayne.foreseer'},
            { id: 'master_of_fate', nameKey: 'zayne.master_of_fate'},
            { id: 'god_of_annihilation', nameKey: 'zayne.god_of_annihilation'},

        ] as CompanionBase[]
    },
    rafayel: {
        companions: [
            { 
                id: 'artist', 
                nameKey: 'rafayel.artist',
                type: 'standard',
                role: 'burst_aoe',
                scaling: 'atk',
                best: 'single_target',
                specialty: 'atk_buff',
                unlock: 'obtain_one_memory',
                alpha: 'hp',
                beta: ['oath_recovery_boost', 'expedited_energy_boost'],
                gamma: 'atk',
                delta: ['crit_rate', 'crit_dmg', 'dmg_boost_to_weakened']

            },
            { 
                id: 'fresh_paint', 
                nameKey: 'rafayel.fresh_paint',
                type: 'standard',
                role: 'heal_single',
                scaling: 'atk',
                best: 'multi_target_res_aoth',
                specialty: 'heal_debuff',
                unlock: 'obtain_six_memories',
                alpha: 'hp',
                beta: ['oath_recovery_boost', 'expedited_energy_boost'],
                gamma: 'atk',
                delta: ['crit_rate', 'crit_dmg', 'dmg_boost_to_weakened']

            },
            { 
                id: 'phantom_of_the_siren', 
                nameKey: 'rafayel.phantom_of_the_siren',
                type: 'standard',
                role: 'support_debuff',
                scaling: 'atk',
                best: 'multi_target',
                specialty: 'debuff',
                unlock: 'main_story_3_14',
                alpha: 'hp',
                beta: ['oath_recovery_boost', 'expedited_energy_boost'],
                gamma: 'atk',
                delta: ['crit_rate', 'crit_dmg', 'dmg_boost_to_weakened']
            
            },
            { 
                id: 'abysswalker', 
                nameKey: 'rafayel.abysswalker',
                type: 'solar',
                stellactrum: 'violet',
                solarPair: 'aw',
                rarity: '★★★★★',
                role: 'burst_single_pull',
                scaling: 'atk',
                best: 'multi_target',
                specialty: 'debuff',
                unlock: 'standard_banner',
            },
            { 
                id: 'god_of_the_tides', 
                nameKey: 'rafayel.god_of_the_tides',
                type: 'solar',
                stellactrum: 'pearl',
                solarPair: 'got',
                rarity: '★★★★★',
                role: 'sustained_buff_aoe',
                scaling: 'hp',
                best: 'multi_target',
                specialty: 'debuff',
                unlock: 'limited_banner',

            },
            { 
                id: 'lemurian_sea_god', 
                nameKey: 'rafayel.lemurian_sea_god',
                type: 'solar',
                stellactrum: 'amber',
                solarPair: 'lsg',
                rarity: '★★★★★',
                role: 'dps_aoe_empower',
                scaling: 'def',
                best: 'multi_target_dps',
                specialty: 'debuff',
                unlock: 'limited_banner',
            },

        ] as CompanionBase[]
    },
    sylus: {
        companions: [
            { id: 'otherworldly_visitor', nameKey: 'sylus.otherworldly_visitor'},
            { id: 'relentless_conqueror', nameKey: 'sylus.relentless_conqueror'},
            { id: 'abysm_sovereign', nameKey: 'sylus.abysm_sovereign'},
        ] as CompanionBase[]
    },
    caleb: {
        companions: [
            { id: 'deepspace_pilot', nameKey: 'caleb.deepspace_pilot'},
            { id: 'farspace_colonel', nameKey: 'caleb.farspace_colonel'},
            { id: 'ultimate_weapon_x_02', nameKey: 'caleb.ultimate_weapon_x_02'},
        ] as CompanionBase[]
    }
} as const 

export type CharacterId = keyof typeof charactersData;
export type CompanionId = typeof charactersData[CharacterId]['companions'][number]['id'];