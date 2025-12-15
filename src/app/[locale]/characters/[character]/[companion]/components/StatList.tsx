import { StatListProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";

export default function StatList ({stats, separator = ", "}: StatListProps) {
    const t = useTranslations('protocores.protocoreStats');

    if (!stats || stats.length === 0) {
        return <span className="text-gray-500">No Data</span>
    }

    return (
        <span>
            {stats?.map((statKey, index) => (
                <span key={statKey}>
                    {t(statKey as any)}
                    {index < stats.length - 1 ? separator : ''}

                </span>
            ))}
        </span>
    )
}