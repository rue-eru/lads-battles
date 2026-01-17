export interface BaseGameplayGuide {
    type: 'standard' | 'solar';
    //summary: string;
    //tips: string[] | string;
}

export type GameplayBlock =
    | {
        type: 'paragraph';
        content: string;
    }
    | {
        type: 'orderedList';
        content: string[];
    }
    | {
        type: 'unorderedList';
        content: string[];
    }
    | {
        type: 'rotationList';
        content: string[];
    }
    | {
        type: 'image';
        src: string;
        alt: string;
        caption: string;
    }
    | {
        type: 'imageGroupSharedCaption';
        caption: string;
        images: Array<{
            src: string;
            alt: string;
        }>
    }
    | {
        type: 'imageGroupPerImageCaption';
        directionLayout?: 'grid-col' | 'flex';
        images: Array<{
            src: string;
            alt: string;
            layout?: 'left' | 'right' | 'top' | 'center';
            caption: string;
        }>
    }
    | {
        type: 'standard_summary';
        content: string;
    }

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
