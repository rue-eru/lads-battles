import { charactersData } from "./loaders/character-data-loader";

export interface SearchItem {
    id: string;
    characterId: string;
    companionId: string;
    characterTKey: string;
    companionTKey: string;
    searchText: string; // all t10ns go here
    route: string; // href 
}

export function getSearchData(): SearchItem[] {
    const searchItems: SearchItem[] = [];

    Object.entries(charactersData).forEach(([characterId, characterData]) => {
        characterData.companions.forEach(companion => {

            const characterTKey = `characters.chNames.${characterId}`;
            const companionTKey = `characters.companions.${companion.nameKey}`;       

            searchItems.push({
                id: `${characterId}-${companion.id}`,
                characterId,
                companionId: companion.id,
                characterTKey,
                companionTKey,
                searchText: `
                    ${characterId} 
                    ${companion.id}
                `.toLocaleLowerCase().trim(),
                route: `/characters/${characterId}/${companion.id}`,
            })
        })
    })

    return searchItems
}