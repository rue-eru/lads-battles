import { CompanionRanks } from "@/app/utils/types/types-ranks";

import xavierRanks from '@/data/ranks/xavier.json'
import zayneRanks from '@/data/ranks/zayne.json'
import rafayelRanks from '@/data/ranks/rafayel.json'
import sylusRanks from '@/data/ranks/sylus.json'
import calebRanks from '@/data/ranks/caleb.json'

export const rankData = {
    xavier: xavierRanks,
    zayne: zayneRanks,
    rafayel: rafayelRanks,
    sylus: sylusRanks,
    caleb: calebRanks,
} as const

export type RankCharacterId = keyof typeof rankData;
// gets all character  IDs eg 'xavier', 'zayne' etc
export type RankCompanionId<T extends RankCharacterId> = keyof typeof rankData[T];
// returns companion IDs for a specific character eg 'abysswalker'

export function getRank(
    characterId: RankCharacterId,
    companionId: string
): CompanionRanks | undefined {
    const character = rankData[characterId];
    return (character as any)?.[companionId];
}