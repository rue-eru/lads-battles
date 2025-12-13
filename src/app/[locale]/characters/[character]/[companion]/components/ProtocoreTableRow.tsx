import Image from "next/image";
import { styles } from "../../../../../utils/styles";
import { ProtocoreTableRowProps } from "../../../../../utils/interfaces-data";
import { useTranslations } from "next-intl";
import { getStellactrumColor } from "../../../../../utils/game/stellactrum-utils";
import StatList from "./StatList";

export default function ProtocoreTableRow ({
    protocoreType,
    protocoreStat, //works as a translation key
    stellactrum
} : ProtocoreTableRowProps) {

    const t = useTranslations('protocoreSection.protocoreStats');
    const displayStellactrum = getStellactrumColor(stellactrum);

    const renderStatContent = () => {
        if (Array.isArray(protocoreStat)) {
            return <StatList stats={protocoreStat}/>
        } else {
            return t(protocoreStat as any) || protocoreStat
        }
    }

    return (
        <tr className={styles.tableRow}>
            <td>
                <div>
                    <Image 
                        src={`/images/mats/protocores/${displayStellactrum}/${protocoreType}.png`}
                        alt={`${protocoreType} protocore`}
                        width={60}
                        height={60}
                        className="object-cover"
                    />
                </div>
            </td>
            <td className="px-4 py-3">
                <div>
                    {renderStatContent()}
                </div>
            </td>
        </tr>
    )
}