'use client'

import { useState } from "react";
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";

type Props = {
    label: string;
    description: string;
    href?: string;
};

export function GlossatyTooltip ({ label, description, href} : Props) {
    const [open, setOpen] = useState(false);

    const {refs, floatingStyles } = useFloating({
        open,
        onOpenChange: setOpen,
        placement: 'top',
        middleware: [
            offset(8),
            flip(),
            shift({ padding: 8})
        ],
        whileElementsMounted   // plural
: autoUpdate,
    })

    const trigger = (
        <span 
            ref={refs.setReference}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`hover:bg-pink-400 text-yellow-100 ${href ? "cursor-pointer" : "cursor-help"}`}
        >
            {label}
        </span>
    )

    return (
        <>
            {href ? <a href={href}>{trigger}</a> : trigger}
            {open && (
                <span
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className="z-50 max-w-xs rounded-md bg-lightgray/90 px-3 py-2 text-white shadow-lg main-font not-italic font-normal"
                >
                    {description}
                </span>
            )}
        </>
    )
}