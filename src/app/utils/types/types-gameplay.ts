export interface BaseGameplayGuide {
    type: 'standard' | 'solar';
}

export interface GameplayBlockBase {
    id: string;
    type:
      | 'paragraph'
      | 'orderedList'
      | 'unorderedList'
      | 'rotationList'
      | 'image'
      | 'imageGroupSharedCaption'
      | 'imageGroupPerImageCaption'
      | 'standard_summary';
}

export type GameplayBlock =
    | (GameplayBlockBase & {
        type: 'paragraph';
        content: string;
    })
    | (GameplayBlockBase & {
        type: 'orderedList';
        content: string[];
    })
    | (GameplayBlockBase & {
        type: 'unorderedList';
        content: string[];
    })
    | (GameplayBlockBase & {
        type: 'rotationList';
        content: string[];
    })
    | (GameplayBlockBase & {
        type: 'image';
        src: string;
        alt: string;
        caption: string;
    })
    | (GameplayBlockBase & {
        type: 'imageGroupSharedCaption';
        caption: string;
        images: Array<{
            src: string;
            alt: string;
        }>
    })
    | (GameplayBlockBase & {
        type: 'imageGroupPerImageCaption';
        directionLayout?: 'grid-col' | 'flex';
        images: Array<{
            src: string;
            alt: string;
            layout?: 'left' | 'right' | 'top' | 'center';
            caption: string;
        }>
    })
    | (GameplayBlockBase & {
        type: 'standard_summary';
        content: string;
    });

export interface StandardGameplayGuideBlock extends BaseGameplayGuide {
    type: 'standard';
    blocks: GameplayBlock[]

}

export interface SolarGameplayGuideBlock extends BaseGameplayGuide {
    type: 'solar';
    blocks: GameplayBlock[]
}

// type for properties
export type GameplayGuide = StandardGameplayGuideBlock | SolarGameplayGuideBlock;
//type for entire gameplay data
export type GameplayData = Record<string, Record<string, GameplayGuide>>;
