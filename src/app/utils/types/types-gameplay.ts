export interface BaseGameplayGuide {
    type: 'standard' | 'solar';
    //summary: string;
    //tips: string[] | string;
}

export type StandardBlock =
    | {
        type: 'paragraph';
        content: string;
    }
    | {
        type: 'ordered list';
        content: string[];
    }
    | {
        type: 'unordered list';
        content: string[];
    }
    | {
        type: 'image';
        src: string;
        alt: string;
        caption?: string;
    }
    | {
        type: 'imageGroupSharedCaption';
        caption?: string;
        images: Array<{
            src: string;
            alt: string;
        }>
    }
    | {
        type: 'imageGroup';
        caption?: string;
        images: Array<{
            src: string;
            alt: string;
        }>
    }
    | {
        type: 'standard_summary';
        content: string;
    }

export interface StandardGameplayGuideBlock extends BaseGameplayGuide {
    type: 'standard';
    blocks: StandardBlock[]

}

export interface SolarGameplayGuideBlock extends BaseGameplayGuide {
    type: 'solar';
    blocks: StandardBlock[]
}

// type for properties
export type GameplayGuide = StandardGameplayGuideBlock | SolarGameplayGuideBlock;
//type for entire gameplay data
export type GameplayData = Record<string, Record<string, GameplayGuide>>;
