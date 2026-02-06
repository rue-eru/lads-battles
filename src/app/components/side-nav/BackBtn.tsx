'use client'

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image"
import { useTranslations } from "next-intl";
import { styles } from "@/app/utils/styles";
import { useEffect, useState } from "react";

export default function BackBtn () {
    const t = useTranslations();

    // history.back() is browser exclusive, for next.js better to stick to next/navigation
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname.split("/").length <= 2;
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        setCanGoBack(window.history.length > 1)
    }, [pathname]) // rechecks when pathname changes

    const handleBack = () => {
        // gets the current URL without the hash but with query parameters
        // artist#gameplay -> artist
        const currentPath = window.location.pathname + window.location.search;

        // path with #
        if (window.location.hash) {
            // erases # from the history 
            router.push(currentPath)
        } else if ( canGoBack) {
            // browser history
            router.back();
        } else {
            router.push('/');
        }
    }

    if (isHome) return null

    return(
        <button
            onClick={handleBack}
            className="cursor-pointer"
        >
            <div className={styles.floatBtnStyle}>
                <Image
                        src="/images/icons/back-arrow.png"
                        alt="back arrow"
                        width={20}
                        height={20}
                        className="object-cover h-3 w-3"
                 />
                <span className="uppercase hidden lg:block lg:flex-none">{t('layout.back')}</span>
            </div>
        </button>
    )

}