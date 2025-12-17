import { SkillCardProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SkillTerm } from "./SkillTerm";
import { styles } from "@/app/utils/styles";


export default function SkillCard ({
    icon,
    nameKey,
    label,
    cooldown,
    cost,
    descriptionKey,
    terms = [],
}: SkillCardProps) {

    const t = useTranslations();
    const tGeneral = useTranslations('skills.general');

    return (
        <tr >

            {/*header with an icon and key points for skills*/}
            <td className="w-32 p-6">
                <div className="relative">
                    <Image 
                        src={icon}
                        alt={t(nameKey)}
                        className="object-cover"
                        width={80}
                        height={80}
                    />
                </div>
            </td>

                <td className="p-6" >
                    <div className="flex flex-wrap items-center gap-3 mb-2 font-inknut">
                        {/*skill name from translation key!*/}
                        <h3>{t(nameKey)}</h3>
                        {/*label as type of skill eg support skill*/}
                        <span className={styles.skillsPinkBubble}>{label}</span>
                        {cooldown && <span className={styles.skillsGrayubble}>{tGeneral("cooldown")} {cooldown}{tGeneral("seconds")}</span>}
                        {cost && <span className={styles.skillsGrayubble}>{tGeneral("cost")} {cost} ◆</span>}
                    </div>


                    {/*skill description part*/}
                    <div className="">
                        <p>{t(descriptionKey)}</p>
                        {/*
                        {terms.length > 0 && (
                            <div className="mt-2">
                                <span className="text-sm text-gray-500">Terms:
                                    {terms.map(term => (
                                        <SkillTerm key={term} term={term} />
                                    ))}
                                </span>
                            </div>
                        )}*/}
                    </div>
                </td>


        </tr>
    )

}