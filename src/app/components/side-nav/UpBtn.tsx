'use client'

import Image from "next/image"
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { styles } from "@/app/utils/styles";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";


export default function BackBtn () {
    
    const t = useTranslations();
    const {isJa} = useCurrentLanguage();

    const [showUP, setShowUP] = useState(false);
    const lastState = useRef(false);

    useEffect(() => {
        const onScroll = () => {
            const shouldShow = window.scrollY > 300;

            // prevents unnecessary state updates
            if (shouldShow !== lastState.current) {
                lastState.current = shouldShow;
                setShowUP(shouldShow);
            }
        }

        window.addEventListener('scroll', onScroll, {passive: true}); //By setting the passive option to true, an event listener declares that it will not cancel the default action, so the browser can start the default action immediately, without waiting for the listener to finish. If the listener does then call Event.preventDefault(), this will have no effect.
        return () => window.removeEventListener("scroll", onScroll)
    }, [])


    
    return(
        <div className={showUP ? "opacity-100" : "opacity-0 pointer-events-none"}>
            {/* btn that scrolls up back to top when it is possible probably should appear on scroll is possible on a page? on a long pages like companion page*/}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
                className="cursor-pointer"
            >
                <div className={styles.floatBtnStyle}>
                    <Image
                            src="/images/icons/up-arrow.png"
                            alt="up arrow"
                            width={20}
                            height={20}
                            className="object-cover w-3 h-3"
                     />
                    <span className={`uppercase hidden lg:block lg:flex-none ${isJa ? "tracking-[0.3em]" : ""}`}>{t('layout.up')}</span>
                </div>            
            </button> 
        </div>
    )
}