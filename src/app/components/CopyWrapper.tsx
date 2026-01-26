'use client'

import { useState } from "react";
import type { CopyWrapperProps } from "../utils/interfaces-data";
import Image from "next/image";

export default function CopyWrapper ({
    text, children, className = ''
}: CopyWrapperProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.log('Copy failed:, err');
        }
    };

    return(
        <div className={`relative group inline-flex items-center ${className}`}>
            <button 
                onClick={handleCopy}
                className="hover:text-pink-400 transition-opacity">
                    {children}
            </button>

            <div>
                {copied 
                    ? <Image
                        src="/images/icons/check-box.png"
                        alt="checked"
                        width={15}
                        height={15}
                        className="object-cover ml-2"
                        unoptimized
                        loading="lazy"
                    />
                    : <Image
                        src="/images/icons/copy.png"
                        alt="checked"
                        width={15}
                        height={15}
                        className="object-cover ml-2"
                        unoptimized
                        loading="lazy"
                    /> 
            }
            </div>

        </div>
    )
}