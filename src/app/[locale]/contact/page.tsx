import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Contact () {

    const tLayout = useTranslations('layout');
    const tCommon = useTranslations('home');

    return(
        <div className="sm:w-[90%] lg:w-[50%] mx-auto">
            <div className={styles.contentlayout}>
                <h1 className={styles.h1}>{tLayout('contact')}</h1>
                <hr className={styles.divider}></hr>
                <p>{tCommon('contacts_intro')}</p>

                <div className="flex items-center gap-4 w-full">
                    <div className="font-inknut font-semibold">{tLayout('email')}</div>
                    <div datatype="email" className="hover:text-pink-400">shigoto.el@gmail.com</div>

                </div>


                <p className="mt-12 w-full">{tCommon('contacts_thanks')}</p>

                <div className="flex items-center gap-2  w-full">
                    <div className="font-inknut font-semibold">{tLayout('ingame_info')}</div>
                    <div className="bg-black"><span className="opacity-0 hover:opacity-100"> Asia 81003102527 </span></div>

                </div>


                <div className=" grid grid-cols-5 place-items-center">
                    <Image
                        alt="kitty raf"
                        src={`/images/idle-gifs/rafayel.webp`}
                        width={200}
                        height={200}
                        className="object-covers col-start-5"
                    />
                </div>
            </div>
        </div>
    )
}