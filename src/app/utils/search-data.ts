import { charactersData } from "./loaders/character-data-loader";


// Import with type assertion
import enCharacters from '@/messages/en/characters.json' assert { type: 'json' };
import ruCharacters from '@/messages/ru/characters.json' assert { type: 'json' };
import jaCharacters from '@/messages/ja/characters.json' assert { type: 'json' };

const translations: any = {
    en: enCharacters,
    ru: ruCharacters,
    ja: jaCharacters
};

export interface SearchItem {
    id: string;
    characterId: string;
    companionId: string;
    characterTKey: string;
    companionTKey: string;
    route: string; // href 

    names: {
        en?: string;
        ru?: string;
        ja?: string;
    }

    aliases: string[]; // ids, shorthand, etc
}

export function getSearchData(): SearchItem[] {
    const searchItems: SearchItem[] = [];

    Object.entries(charactersData).forEach(([characterId, characterData]) => {
        characterData.companions.forEach(companion => {

            //IDs always searchable
            // RU doesnt have official localization so it can use any 
            // EN & JA have official namings for search
            searchItems.push({
                id: `${characterId}-${companion.id}`,
                characterId,
                companionId: companion.id,
                characterTKey: `characters.chNames.${characterId}`,
                companionTKey: `characters.companions.${characterId}.${companion.id}`,
                route: `/characters/${characterId}/${companion.id}`,

                names: {
                    en: `${translations.en.chNames?.[characterId]} ${translations.en.companions?.[characterId]?.[companion.id]}`,
                    ja: `${translations.ja.chNames?.[characterId]} ${translations.ja.companions?.[characterId]?.[companion.id]}`,
                    ru: `${translations.ru.chNames?.[characterId] ?? ''} ${translations.ru.companions?.[characterId]?.[companion.id] ?? ''}`,
                },

                aliases : [
                    characterId,
                    companion.id
                ]
            })
        })
    })

    return searchItems
}