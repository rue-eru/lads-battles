'use client'

import Script from "next/script";
import { useEffect, useState } from "react";

export default function SpoilerUID () {
    const [isSpoilerLoaded, setIsSpoilerLoaded] = useState(false);

    useEffect(() => {
        if (customElements.get('spoiler-span')) {
            setIsSpoilerLoaded(true)
        }
    }, []);

    return (
        <>
            <Script 
              src="https://unpkg.com/spoilerjs/dist/components/spoiler-span.js" 
              strategy="beforeInteractive"
              type="module"
            />
            {isSpoilerLoaded ? (
                <spoiler-span>
                    <span className="cursor-text">Asia 81003102527 素える</span>
                </spoiler-span>
            ) : (
                <div className="inline-block bg-gray-700 animate-pulse rounded px-4 mt-1 h-5 min-w-50"></div>
            )}
        </>
    )
}