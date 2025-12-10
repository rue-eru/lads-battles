    export type StellactrumColor = 'emerald' | 'amber' | 'ruby' | 'sapphire' | 'violet' | 'pearl';

    const isValidStellactrum = (color: string): color is StellactrumColor => {
        const validColors: StellactrumColor[] = ['emerald', 'amber', 'ruby', 'sapphire', 'violet', 'pearl'];
        return validColors.includes(color as StellactrumColor);
    }

    const getRandomStellactrumColor = (): StellactrumColor => {
        const colors: StellactrumColor[] = ['emerald', 'amber', 'ruby', 'sapphire', 'violet', 'pearl'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    export function getStellactrumColor(companionStellactrum?: string): StellactrumColor {
        if (companionStellactrum && isValidStellactrum(companionStellactrum)) {
            return companionStellactrum as StellactrumColor;
        }

        return getRandomStellactrumColor()
    }