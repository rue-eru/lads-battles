export interface BaseGameplayGuide {
    type: 'standard' | 'solar';
    summary: string;
    tips: string[];
}

export interface StandardGameplayGuide extends BaseGameplayGuide {
    type: 'standard';
    images: Array<{
        src: string;
        alt: string;
        caption?: string;
    }>
}

export interface SolarGameplayGuide extends BaseGameplayGuide {
    type: 'solar';
    rotations: string[];
    images: Array<{
        src: string;
        alt: string;
        caption?: string;
    }>;
    mechanics: Array<{
      name: string;
      description: string;
      icon?: string;  
    }>;
}

export type GameplayGuide = StandardGameplayGuide | SolarGameplayGuide