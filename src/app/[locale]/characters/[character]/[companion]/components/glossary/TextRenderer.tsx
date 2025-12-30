'use client'

import type { TextRendererProps } from "@/app/utils/interfaces-data";
import { GlossaryText } from "./GlossaryText";

export function TextRenderer({ children, className }: TextRendererProps) {

    return(
        <span className={className}>
            <GlossaryText text={children} />
        </span>
    )
}