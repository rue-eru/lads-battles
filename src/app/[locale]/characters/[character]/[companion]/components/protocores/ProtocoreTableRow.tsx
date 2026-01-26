'use client'

import Image from "next/image";
import { styles } from "@/app/utils/styles";
import { ProtocoreTableRowProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import StatList from "./StatList";
import { TextRenderer } from "../glossary/TextRenderer";

export default function ProtocoreTableRow ({
    protocoreType,
    protocoreStat, //works as a translation key
    stellactrum
} : ProtocoreTableRowProps) {

    const t = useTranslations('protocores.protocoreStats');

    const renderStatContent = () => {
        if (Array.isArray(protocoreStat)) {
            return <StatList stats={protocoreStat}/>
        } else {
            return <TextRenderer>{t(protocoreStat as any)}</TextRenderer>
        }
    }

    return (
        <tr className={styles.tableRow}>
            <td>
                <div>
                    <Image 
                        src={`/images/mats/protocores/${stellactrum}/${protocoreType}.png`}
                        alt={`${protocoreType} protocore`}
                        width={60}
                        height={60}
                        className="object-cover"
                        unoptimized
                        loading="lazy"
                    />
                </div>
            </td>
            <td className="px-4 py-3 w-[90%]">
                <div>
                    {renderStatContent()}
                </div>
            </td>
        </tr>
    )
}