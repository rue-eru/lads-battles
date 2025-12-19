import { CharacterData, CharactersData } from "@/app/utils/types/types-data"

import xavierData from '@/data/characters/xavier.json';
import zayneData  from '@/data/characters/zayne.json';
import rafayelData from '@/data/characters/rafayel.json';
import sylusData from '@/data/characters/sylus.json';
import calebData from '@/data/characters/caleb.json';

//rewrite others later

const xavier: CharacterData = xavierData;
const zayne: CharacterData = zayneData;
const rafayel: CharacterData = rafayelData as CharacterData;
const sylus: CharacterData = sylusData;
const caleb: CharacterData = calebData;

// it's an object with character IDs
export const charactersData: CharactersData = {
    xavier,
    zayne,
    rafayel,
    sylus,
    caleb,
} as const;

export type CharacterId = keyof typeof charactersData;
export type CompanionId = typeof charactersData[CharacterId]['companions'][number]['id'];