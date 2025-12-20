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
        type: 'image';
        src: string;
        alt: string;
        caption?: string;
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
        type: 'summary';
        content: string;
    }

export interface StandardGameplayGuideBlock extends BaseGameplayGuide {
    type: 'standard';
    blocks: StandardBlock[]

}

export interface SolarGameplayGuide extends BaseGameplayGuide {
    type: 'solar';
    rotations: string[];
    images: Array<{
        src: string;
        alt: string;
        caption?: string;
    }>;
    imageGroup?: Array<{
        caption?: string;
        images: Array<{
            src:string;
            alt: string;
        }>
    }>;
    mechanics: Array<{
      name: string;
      description: string;
      icon?: string;  
    }>;
}

// type for properties
export type GameplayGuide = StandardGameplayGuideBlock | SolarGameplayGuide;
//type for entire gameplay data
export type GameplayData = Record<string, Record<string, GameplayGuide>>;
