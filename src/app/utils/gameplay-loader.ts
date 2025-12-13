import { CompanionGameplay } from "./types-gameplay";

import { xavierGameplay } from "@/data/gameplay/xavier";
import { zayneGameplay } from "@/data/gameplay/zayne";
import { rafayelGameplay } from "@/data/gameplay/rafayel";
import { sylusGameplay } from "@/data/gameplay/sylus";
import { calebGameplay } from "@/data/gameplay/caleb";

export const gameplayData = {
    xavier: xavierGameplay,
    zayne: zayneGameplay,
    rafayel: rafayelGameplay,
    sylus: sylusGameplay,
    caleb: calebGameplay,
} as const

export type GameplayCharacterId = keyof typeof gameplayData;
// gets all character  IDs eg 'xavier', 'zayne' etc
export type GameplayCompanionId<T extends GameplayCharacterId> = keyof typeof gameplayData[T];
// returns companion IDs for a specific character eg 'abysswalker'

export function getGameplay(
    characterId: GameplayCharacterId,
    companionId: string
): CompanionGameplay | undefined {
    const character = gameplayData[characterId];
    return (character as any)?.[companionId];
}