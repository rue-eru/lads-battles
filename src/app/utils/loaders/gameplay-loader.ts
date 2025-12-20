import { GameplayGuide } from "../types/types-gameplay";

import { xavierGameplay } from "@/data/gameplay/xavier";
import { zayneGameplay} from "@/data/gameplay/zayne";
import { rafayelGameplay } from "@/data/gameplay/rafayel";
import { sylusGameplay } from "@/data/gameplay/sylus";
import { calebGameplay } from "@/data/gameplay/caleb";

export const GameplayData = {
    xavier: xavierGameplay,
    zayne: zayneGameplay,
    rafayel: rafayelGameplay,
    sylus: sylusGameplay,
    caleb: calebGameplay,
} as const

//type for chracter ids 
export type GameplayCharacterId = keyof typeof GameplayData;

//type for companions ids
export type GameplayCompanionId<T extends GameplayCharacterId> = keyof typeof GameplayData[T];

export function getGameplayGuide(
    characterId: GameplayCharacterId,
    companionId: string
): GameplayGuide | undefined {
    const character = GameplayData[characterId];
    return (character as any)?.[companionId]
}