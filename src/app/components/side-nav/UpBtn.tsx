import Image from "next/image"
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { styles } from "@/app/utils/styles";


export default function BackBtn () {
    
    const t = useTranslations();

    const [showUP, setShowUP] = useState(false);

    useEffect(() => {
        const handler = () => {
            setShowUP(window.scrollY > 300);
        }

        window.addEventListener('scroll', handler);
        return () => window.removeEventListener("scroll", handler)
    }, [])


    
    return(
        <>
            {/* btn that scrolls up back to top when it is possible probably should appear on scroll is possible on a page? on a long pages like companion page*/}
            {showUP && (
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
            >
                <div className={styles.floatBtnStyle}>
                    <Image
                         src="/images/icons/up-arrow.png"
                         alt="up arrow"
                         width={10}
                         height={10}
                         className="object-cover"
                     />
                    <span className="uppercase hidden lg:block">{t('layout.up')}</span>
                </div>            
            </button>
            )}
        </>
    )
}