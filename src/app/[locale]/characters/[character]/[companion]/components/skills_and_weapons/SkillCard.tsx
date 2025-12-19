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

    const hasNB = () => {
        if (nameKey?.includes('.resonance_skill.')) return 'resonance_skill';
        if (nameKey?.includes('.ardent_oath.')) return 'ardent_oath';

        return null
    }

    const NBType = hasNB();

    return (
        <tr >

            {/*header with an icon and key points for skills*/}
            <td className={styles.imgSkillWidth}>
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
                <div className={styles.skillInfoBubbleDiv}>
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
                    {NBType && <span className="italic">{tGeneral(`skill_NB.${NBType}`)}</span>}
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