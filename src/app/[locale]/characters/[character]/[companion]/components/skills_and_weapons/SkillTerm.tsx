'use client'

import { SkillTermProps } from "@/app/utils/interfaces-data";
import { useState } from "react";

export function SkillTerm ({
    term,
    onClick
}: SkillTermProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        onClick?.(term);

        //scroll to term definition
        const element = document.getElementById(`term-${term.toLowerCase().replace(/\s+/g, '-')}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center'});
            element.classList.add('highlight-term');
            setTimeout(() => element.classList.remove('highlight-term'), 2000)
        }
    }

    return (
        <span className="relative inline-block">
            <button
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-pink-400 underline underline-offset-2 hover:text-pink-300 transition-colors cursor-pointer mx-0.5 px-1 rounded"
            >
                [{term}]
            </button>

            {isHovered && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-x-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-llg z-10 whitespace-nowrap">
                    Click to learn about {term}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
            )}
        </span>
    )
}