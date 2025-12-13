// it is still a placeholder for Namings in description that needs reference for understanding
//create a component later ? smt like RichText
export interface SkillDescription {
    text: string;
    links?: Array<{
        term:string;
        href:string;
        tooltip?: string;
    }>;
    highlights?: string;
}

//goes directly in CompanionGameplay as an interface for each skill
export interface Skills {
    name_key: string;
    cooldown?: string;
    cost?: string;
    description_key: SkillDescription;
    terms?: string[];
}

export interface CompanionGameplay {
    his_skills: {
        support_skill: Skills;
        resonance_skill: Skills;
        ardent_oath: Skills;
        passive_skill: Skills;
    };
    my_skills?: {
        weapon_key: string;
        basic_attack: Skills;
        passive_skill: Skills;
        active_skill: Skills;
    }
}

export type GameplayData = Record<string, Record<string, CompanionGameplay>>;
