import { charactersData } from "./loaders/character-data-loader";

export interface SearchItem {
    id: string;
    searchKeys: {
        characterKey: string;
        companionKey: string;
        characterNameKey: string;
        companionNameKey: string;
    };
    displayKey:string; //for t()
    route: string; // href 
    type: 'companion';
}

export function getSearchData(): SearchItem[] {
    const searchItems: SearchItem[] = [];

    Object.entries(charactersData).forEach(([characterId, characterData]) => {
        characterData.companions.forEach(companion => {
            searchItems.push({
                id: `${characterId}-${companion.id}`,
                searchKeys: {
                    characterKey: characterId,
                    companionKey: companion.id,
                    characterNameKey: characterId, // need namekey recheck later how it works 
                    companionNameKey: companion.nameKey,
                },
                displayKey: `search.${characterId}.${companion.id}`,
                route: `/characters/${characterId}/${companion.id}`,
                type: 'companion',
            })
        })
    })

    return searchItems
}