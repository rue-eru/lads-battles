'use client'

import Image from "next/image";

interface LightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
}

export function Lightbox({
    src, alt, onClose
}: LightboxProps) {
    return(
        <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={onClose}
        >
            <div className="relative w-[90vw] h-[90vh]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority
                />
            </div>

        </div>
    )
}