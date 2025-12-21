
export interface CharaDataProps{
    character: string,
    companion: string
}

export interface TableRowProps{
    label: string,
    value: string | React.ReactNode;//for images
}

export interface TableRowProps{
    label: string,
    value: string | React.ReactNode;//for images
}

export interface ProtocoreTableRowProps { 
    protocoreType: 'alpha' | 'beta' | 'delta' | 'gamma';
    protocoreStat?: string;
    stellactrum?: string;
}

export interface RankProtocoreData {
    alpha?: string;
    beta?: string;
    delta?: string;
    gamma?: string;
    description?: string
}

export interface ProtocoreTypesTableProps {
    stellactrum?: string;
}

export interface StatListProps {
    stats?: string[];
    separator?: string
}

export interface SkillWeaponTableRowProps {
    icon: string;
    title: string;
    label: 'support_skill' | 'resonance_skill' | 'ardent_oath' | 'his_passive_skill' | 'basic_attack' | 'active_skill' | 'my_passive_skill';
    cooldown?: number;
    cost?: number;
    data: string;
}

export interface SkillCardProps { 
    icon: string;
    nameKey: string;
    label: string;
    cooldown?: number;
    cost?: number;
    descriptionKey: string;
    terms?: string[];
}

export interface SkillTermProps { 
    term: string;
    onClick?: (term: string) => void;
}

export interface WeaponCardProps {
    weaponId: string;
    weaponData: any;
    isExpanded: boolean;
    onToggle: () => void;
}

export interface GameplaySectionProps {
    character: string;
    companion: string;
}

export interface StandardGameplayCardProps {
    character: string;
    companion: string;
}

export interface LightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
}