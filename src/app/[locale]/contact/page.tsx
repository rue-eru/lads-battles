import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";

export default function Contact () {

    const tLayout = useTranslations('layout');
    return(
        <div className="sm:w-[90%] lg:w-[50%] mx-auto">
            <div className={styles.contentlayout}>
                <h1 className={styles.h1}>{tLayout('contact')}</h1>
                <hr className={styles.divider}></hr>
            </div>
        </div>
    )
}