'use client'

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage"
import { useState } from "react";


export default function LogoIcon() {
    const { isJa } = useCurrentLanguage();
    const [onHover, setOnHover] = useState(false);

    const LogoPath =
        onHover
            ?  "/images/icons/main-logo-accent.png"
            :  "/images/icons/main-logo.png"
    

    const JaLogoPath =
        onHover
            ?  "/images/icons/ja-logo-accent.png"
            :  "/images/icons/ja-logo.png"


    return(
        <Link href="/" className="hidden sm:block">
                <Image
                    src={isJa 
                            ? JaLogoPath 
                            : LogoPath
                        }
                    onMouseEnter={() => setOnHover(true)}
                    onMouseLeave={() => setOnHover(false)}
                    alt="Website Logo > Home Link"
                    width={70}
                    height={70}
                    className="object-cover h-10 w-auto transition-all"
                    loading="eager"
                    rel="preload"
                    sizes="(max-width: 640px) 50px,
                            (max-width: 768px) 70px,
                            100px"
                />
        </Link>
    )
}