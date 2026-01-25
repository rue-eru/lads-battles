import { usePathname, useRouter } from "next/navigation";
import Image from "next/image"
import { useTranslations } from "next-intl";
import { styles } from "@/app/utils/styles";

export default function BackBtn () {
    const t = useTranslations();


    // history.back() is browser exclusive, for next.js better to stick to next/navigation
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname.split("/").length <= 2;


    return(
        <>
            {/*should get on a back page also shouldnt appear on the home page but on others */}
            {!isHome && 
            <button
                onClick={() => router.back()}
                className="cursor-pointer"
            >
                <div className={styles.floatBtnStyle}>
                    <Image
                         src="/images/icons/back-arrow.png"
                         alt="back arrow"
                         width={20}
                         height={20}
                         className="object-cover"
                     />
                    <span className="uppercase hidden lg:block lg:flex-none">{t('layout.back')}</span>
                </div>
            </button>
            }        
        </>
    )

}