'use client'

import { GLOSSARY } from "@/data/glossary.data";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/translucent.css';
import 'tippy.js/animations/perspective-subtle.css';
import { useTranslations } from "next-intl";



export function GlossaryText ({ text }: { text: string}) {
    const parts = text.split(/(\[[^\]]+\])/g);

    const tGlossay = useTranslations('glossary');

    return(
        <>
            {parts.map((part, index) => {

                const match = part.match(/^\[(.+)\]$/);

                if (!match) return part;

                const termKey = match[1];
                const term = GLOSSARY[termKey];

                if (!term) return termKey;

                const content = (
                    <span className="hover:bg-pink-400 text-yellow-100 underline decoration-dotted decoration-pink-400 cursor-help">
                        {tGlossay(term.label)}
                    </span>
                );

                return term.description ? (
                    <Tippy 
                        key={index} 
                        content={tGlossay(term.description)} 
                        theme="translucent"
                        animation="perspective-subtle"
                    > 
                        {term.link 
                            ? <a href={term.link}>{content}</a>
                            : content
                        }
                    </Tippy>
                ) : term.link ? (
                    <a key={index} href={term.link} className="underline">
                        {tGlossay(term.label)}
                    </a>
                ) : (
                    term.label
                )
            })}
        
        </>
    )
}