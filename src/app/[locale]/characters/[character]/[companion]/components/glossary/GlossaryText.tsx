'use client'

import { GLOSSARY } from "@/data/glossary.data";
import { useTranslations } from "next-intl";
import { GlossatyTooltip } from "./GlossatyTooltip";



export function GlossaryText ({ text }: { text: string}) {
    const parts = text.split(/(\[[^\]]+\])/g);
    const tGlossay = useTranslations('glossary');

    return(
        <>
            {parts.map((part, index) => {

                const match = part.match(/^\[(.+)\]$/);

                if (!match) return <span key={index}>{part}</span>;

                const termKey = match[1];
                const term = GLOSSARY[termKey];

                if (!term) return <span key={index}>{termKey}</span>;

                const label = tGlossay(term.label) || term.label

                const description = term.description
                    ? tGlossay(term.description) || term.description
                    : null;

                if (description) {
                    return (
                        <GlossatyTooltip
                            key={index}
                            label={label}
                            description={description}
                            href={term.link}
                        />
                    )
                }

                if (term.link) {
                    return (
                        <a key={index} href={term.link} className="underline">{label}</a>
                    )
                }

                return <span key={index}>{label}</span>
            })}
        
        </>
    )
}