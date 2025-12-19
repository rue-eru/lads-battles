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
    beta?: string[];
    gamma?: string;
    delta?: string[];
}

export interface CharacterData {
  companions: CompanionBase[];  
  // a character HAS companions
}

export interface CharactersData {
  [characterId: string]: CharacterData;  
  // Object with character IDs as keys
}