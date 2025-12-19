import { CompanionSkills } from "../types/types-skills";

import { xavierSkills } from "@/data/skills/xavier";
import { zayneSkills} from "@/data/skills/zayne";
import { rafayelSkills } from "@/data/skills/rafayel";
import { sylusSkills } from "@/data/skills/sylus";
import { calebSkills } from "@/data/skills/caleb";

export const SkillsData = {
    xavier: xavierSkills,
    zayne: zayneSkills,
    rafayel: rafayelSkills,
    sylus: sylusSkills,
    caleb: calebSkills,
} as const

export type SkillsCharacterId = keyof typeof SkillsData;
// gets all character  IDs eg 'xavier', 'zayne' etc
export type SkillsCompanionId<T extends SkillsCharacterId> = keyof typeof SkillsData[T];
// returns companion IDs for a specific character eg 'abysswalker'

export function getSkills(
    characterId: SkillsCharacterId,
    companionId: string
): CompanionSkills | undefined {
    const character = SkillsData[characterId];
    return (character as any)?.[companionId];
}