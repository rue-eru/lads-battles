import { SkillCardProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { SkillTerm } from "./SkillTerm";
import Image from "next/image";


export default function SkillCard ({
    icon,
    nameKey,
    label,
    cooldown,
    cost,
    descriptionKey,
    terms = [],
    compact = false
}: SkillCardProps) {

    const t = useTranslations();

    const handleTermClick = (term: string) => {
        console.log('Term clicked:', term)
    }

    // if decription mentions other skills we'll add it as a SkillTerm
    const renderDescription = () => {
        const description = t(descriptionKey as any);

        // If no terms, return plain text
        if (terms.length === 0) {
            return <span>{description}</span>;
        }

        const parts = [];
        let remainingText = description;

        // Process each term
        terms.forEach(term => {
            const bracketTerm = `[${term}]`;
            const termIndex = remainingText.indexOf(bracketTerm);

            if (termIndex !== -1) {
                // Add text before the term
                if (termIndex > 0) {
                    parts.push(remainingText.substring(0, termIndex));
                }
                
                // Add the term as a component
                parts.push(
                    <SkillTerm 
                        key={`${term}-${parts.length}`}
                        term={term}
                        onClick={handleTermClick}
                    />
                );
                
                // Update remaining text (AFTER the term)
                remainingText = remainingText.substring(termIndex + bracketTerm.length);
            }
        });

        // Add any remaining text at the end
        if (remainingText) {
            parts.push(remainingText);
        }

        return <span>{parts}</span>;
    };

    return (
        <div className={`${compact ? 'p-2' : 'p-4'}`}>

            {/*header with an icon and key points for skills*/}
            <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 relative">
                    <Image 
                        src={icon}
                        alt={t(nameKey as any)}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3>{t('nameKey' as any)}</h3>
                    <div>
                        <span className="capitalize">{label.replace(/_/g, ' ')}</span>
                        {cooldown && <span>cooldown {cooldown}s</span>}
                        {cost && <span>cost {cost}</span>}
                    </div>
                </div>
            </div>

            {/*skill description part*/}
            <div className="leading-relaxed">
                {renderDescription()}
            </div>
        </div>
    )

}