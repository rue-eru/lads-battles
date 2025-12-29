import { GLOSSARY } from "@/data/glossary.data";
import Tippy from "@tippyjs/react";

export function GlossaryText ({ text }: { text: string}) {
    const parts = text.split(/(\[[^\]]+\])/g);

    return(
        <>
            {parts.map((part, index) => {

                const match = part.match(/^\[(.+)\]$/);

                if (!match) return part;

                const termKey = match[1];
                const term = GLOSSARY[termKey];

                if (!term) return termKey;

                const content = (
                    <span className="underline decoration-dotted cursor-help">
                        {term.label}
                    </span>
                );

                return term.description ? (
                    <Tippy key={index} content={term.description}>
                        {term.link 
                            ? <a href={term.link}>{content}</a>
                            : content
                        }
                    </Tippy>
                ) : term.link ? (
                    <a key={index} href={term.link} className="underline">
                        {term.label}
                    </a>
                ) : (
                    term.label
                )
            })}
        
        </>
    )
}