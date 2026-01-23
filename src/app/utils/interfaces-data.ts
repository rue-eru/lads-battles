import type { ReactNode } from "react";
import type React from "react";

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
    betaData?: string[];
    deltaData?: string[];
}

export interface StatListProps {
    stats?: string[];
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
    id?: string;
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

export interface GlossaryTermProps {
    key: string;
    label: string;
    description: string;
    link?: string;
}

export interface TextRendererProps {
    children: string;
    className?: string;
}

export interface GlossaryTextProps {
    text: string;
    className?: string;
}

export interface NavDropdownProps {
    label: ReactNode;
    children: ReactNode;
}

export interface GuideStateProviderProps {
    hasGuide: boolean;
    children: ReactNode;
}

export interface CopyWrapperProps {
    text: string;
    children: ReactNode;
    className?: string;
}

export interface ProtocoreTableProps {
    stellactrum: string;
    character: string;
    companion: string;
}

export interface ErrorPageProps {
    code: number;
    onRetry?: () => void
}

export interface ErrorProps {
    error: Error & { digest?: string};
    reset: () => void;
}
