import { CharacterData, CharactersData } from "@/app/utils/types/types-data"

import xavierData from '@/data/characters/xavier.json';
import zayneData  from '@/data/characters/zayne.json';
import rafayelData from '@/data/characters/rafayel.json';
import sylusData from '@/data/characters/sylus.json';
import calebData from '@/data/characters/caleb.json';
import valkoData from '@/data/characters/valko.json'

//rewrite others later

const xavier: CharacterData = xavierData as CharacterData;
const zayne: CharacterData = zayneData as CharacterData;
const rafayel: CharacterData = rafayelData as CharacterData;
const sylus: CharacterData = sylusData as CharacterData;
const caleb: CharacterData = calebData as CharacterData;
const valko: CharacterData = valkoData as CharacterData;


// it's an object with character IDs
export const charactersData: CharactersData = {
    xavier,
    zayne,
    rafayel,
    sylus,
    caleb,
    valko
} as const;

export type CharacterId = keyof typeof charactersData;
export type CompanionId = typeof charactersData[CharacterId]['companions'][number]['id'];

export const characters = ['xavier', 'zayne', 'rafayel', 'sylus', 'caleb', 'valko'];
