export interface RankInfo {
    beta: string[];
    delta: string[];
    description_key: string;
    rich_description?: {
        text: string;
        links?: Array<{
            term: string;
            href: string;
            tooltip?: string
        }>;
        highlights?: string[];
    };
}

export interface CompanionRanks {
    r0: RankInfo;
    r1: RankInfo;
    r2: RankInfo;
    r3: RankInfo;
}

