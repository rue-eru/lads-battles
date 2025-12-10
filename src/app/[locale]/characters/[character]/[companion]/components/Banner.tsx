"use client"

import { CharaDataProps } from "@/app/utils/interfaces-data";
import Image from "next/image";

export default function Banner({character, companion} : CharaDataProps) {
        
    return (
        <div className="w-full mx-auto"> {/*full width on mobile, 5-% on md+*/}
                <Image 
                    src={`/images/companions/${character}/banners/${companion}.png`}
                    alt="Page banner"
                    width={1920}
                    height={620}
                    className="w-full h-auto"
                    priority
                />
        </div>
    )
}