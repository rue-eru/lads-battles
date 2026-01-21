export interface BaseGameplayGuide {
    type: 'standard' | 'solar';
}

export type GameplayBlock =
    | {
        type: 'paragraph';
        content: string;
        id: string;
    }
    | {
        type: 'orderedList';
        content: string[];
        id: string;
    }
    | {
        type: 'unorderedList';
        content: string[];
        id: string;

    }
    | {
        type: 'rotationList';
        content: string[];
        id: string;

    }
    |{
        type: 'image';
        src: string;
        alt: string;
        caption: string;
        id: string;
    }
    |{
        type: 'imageGroupSharedCaption';
        caption: string;
        images: Array<{
            src: string;
            alt: string;
        }>
        id: string;

    }
    |{
        type: 'imageGroupPerImageCaption';
        directionLayout?: 'grid-col' | 'flex';
        images: Array<{
            src: string;
            alt: string;
            layout?: 'left' | 'right' | 'top' | 'center';
            caption: string;
        }>
        id: string;
    }
    | {
        type: 'standard_summary';
        content: string;
        id: string;
    };

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
