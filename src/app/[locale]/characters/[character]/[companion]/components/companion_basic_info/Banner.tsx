"use client"

import { GENERIC_BLUR } from "@/app/lib/imageBlur";
import { CharaDataProps } from "@/app/utils/interfaces-data";
import Image from "next/image";

export default function Banner({character, companion} : CharaDataProps) {
        
    return (
        <div className="w-full mx-auto"> {/*full width on mobile, 5-% on md+*/}
                <Image 
                    src={`/images/companions/${character}/banners/${companion}.png`}
                    alt={`${companion} banner`}
                    width={800}
                    height={258}
                    className="w-full h-auto"
                    priority={true}
                    quality={75}
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={GENERIC_BLUR}
                />

        </div>
    )
}

// Desktop/Large: \(1920\times 620\) (\(3.09:1\))
// Laptop/Tablet: \(1200\times 388\) (\(3.09:1\))
// Mobile (Landscape): \(800\times 258\) (\(3.1:1\))
// Mobile (Portrait): \(375\times 121\) (\(3.1:1\)) 