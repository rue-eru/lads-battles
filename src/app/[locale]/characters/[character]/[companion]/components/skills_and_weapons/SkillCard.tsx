import { SkillCardProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { styles } from "@/app/utils/styles";
import { TextRenderer } from "../glossary/TextRenderer";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";


export default function SkillCard ({
    icon,
    nameKey,
    label,
    cooldown,
    cost,
    descriptionKey,
    id
}: SkillCardProps) {

    const t = useTranslations();
    const tGeneral = useTranslations('skills.general');
    const {isRu} = useCurrentLanguage();

    const hasNB = () => {
        if (nameKey?.includes('.resonance_skill.')) return 'resonance_skill';
        if (nameKey?.includes('.ardent_oath.')) return 'ardent_oath';

        return null
    }

    const NBType = hasNB();

    return (
        <tr id={id}>

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

            <td className={styles.skillDescriptionDiv} >
                <div className={styles.skillInfoBubbleDiv}>
                    {/*skill name from translation key!*/}
                    <h3>{t(nameKey)}</h3>
                    {/*label as type of skill eg support skill*/}
                    <span className={styles.skillsPinkBubble}>{label}</span>
                    {cooldown && <span className={`${styles.skillsGrayubble} ${isRu ? "lowercase" : ""}`}>{tGeneral("cooldown")} {cooldown}{tGeneral("seconds")}</span>}
                    {cost && <span className={`${styles.skillsGrayubble} ${isRu ? "lowercase" : ""}`}>{tGeneral("cost")} {cost} ◆</span>}
                </div>
                {/*skill description part*/}
                <div className="">
                        <TextRenderer>{t(descriptionKey)}</TextRenderer>
                    {NBType && <span className="italic">
                        <TextRenderer>{tGeneral(`skill_NB.${NBType}`)}</TextRenderer>
                    </span>}
                </div>
            </td>

        </tr>
    )

}