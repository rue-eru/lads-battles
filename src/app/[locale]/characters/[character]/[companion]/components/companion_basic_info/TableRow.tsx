import { TableRowProps } from "@/app/utils/interfaces-data";
import { styles } from "@/app/utils/styles";

export default function TableRow ({label, value}: TableRowProps) {
    return (
        <tr className={styles.tableRow}>
            <td className="uppercase">
                {label}
            </td>
            <td className="px-4 py-3">
                {value}
            </td>
        </tr>       
    )
}