'use client'

import { useState } from "react";
import type { SpoilerProps } from "../utils/interfaces-data";

export default function Spoiler (
    {text} : SpoilerProps
) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            {isClicked ? (
                <span className="cursor-text">{text}</span>
            ) : (
                <div 
                    className="inline-block bg-gray-700 animate-pulse rounded px-4 h-6 -mb-1 min-w-50"
                    onClick={() => setIsClicked(true)}
                ></div>
            )}
        </>
    )
}