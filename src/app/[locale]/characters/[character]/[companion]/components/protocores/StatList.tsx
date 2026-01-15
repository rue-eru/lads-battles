import { StatListProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { TextRenderer } from "../glossary/TextRenderer";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";

export default function StatList ({stats}: StatListProps) {
    const t = useTranslations('protocores.protocoreStats');
    const { isJa } = useCurrentLanguage();
    const separator = isJa ? "、" : ", ";

    if (!stats || stats.length === 0) {
        return <span className="text-gray-500">No Data</span>
    }

    return (
        <span>
            {stats?.map((statKey, index) => (
                <span key={statKey}>
                    <TextRenderer>{t(statKey as any)}</TextRenderer>
                    {index < stats.length - 1 ? separator : ''}

                </span>
            ))}
        </span>
    )
}