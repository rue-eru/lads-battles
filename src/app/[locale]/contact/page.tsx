import CopyWrapper from "@/app/components/CopyWrapper";
import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Script from "next/script";

export default function Contact () {

    const tLayout = useTranslations('layout');
    const tCommon = useTranslations('home');

    return(
        <div>
            <Script 
              src="https://unpkg.com/spoilerjs/dist/components/spoiler-span.js" 
              strategy="lazyOnload"
              type="module"
            />

            <div className={styles.pagelayout}>
                <div className={styles.contentlayout}>
                    <h1 className={styles.h1}>{tLayout('contact')}</h1>
                    <hr className={styles.divider}></hr>
                    <p>{tCommon('contacts_intro')}</p>
        
                    <div className="flex flex-col sm:flex-row items-center sm:gap-4 w-full">
                        <div className="font-accent font-semibold">{tLayout('email')}</div>
                        <CopyWrapper text="shigoto.el@gmail.com">
                            <span  className="cursor-text">shigoto.el@gmail.com</span>
                        </CopyWrapper>
                    </div>
        
        
                    <p className="mt-4 w-full">{tCommon('contacts_thanks')}</p>
        
                    <div className="flex flex-col sm:flex-row items-center sm:gap-2  w-full">
                        <div className="font-accent font-semibold">{tLayout('ingame_info')}</div>
                        
                        {/*it works it is being upset since it is being imported through Script and its custom compoenent without being installed by packages |
                        i tried installing it through the npm packege and it didnt work at all so it stays as it is ig */}
                        <CopyWrapper text="Asia 81003102527 素える">
                            <spoiler-span>
                                <span className="cursor-text">Asia 81003102527 素える</span>
                            </spoiler-span>
                        </CopyWrapper>

                    </div>
        
        
                    <div className="grid grid-cols-5 place-items-center justify-center">

                        <div className="col-start-3 sm:col-start-5 w-45">
                            {/*Console said : The requested resource "/images/others/rafayel.webp" is an animated image so it will not be optimized. Consider adding the "unoptimized" property to the <Image>.*/}
                            <Image
                                alt="kitty raf"
                                src={`/images/others/rafayel.webp`}
                                width={200}
                                height={200}
                                className="object-covers z-50"
                                unoptimized
                            /> 

                            <div className="flex gap-2 w-fit mx-auto -mt-7">
                                <a href="mailto:shigoto.el@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        alt="email icon"
                                        src={`/images/icons/email.png`}
                                        width={30}
                                        height={30}
                                        className={styles.contactIcons}
                                        title="Email"
                                    />
                                </a>
                                <a href="https://github.com/rue-eru" aria-label="Github" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        alt="github icon"
                                        src={`/images/icons/github-logo.png`}
                                        width={30}
                                        height={30}
                                        className={styles.contactIcons}
                                        title="Github"

                                    />
                                </a>
                                <a href="https://t.me/literallyfault" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        alt="telegram icon"
                                        src={`/images/icons/telegram.png`}
                                        width={30}
                                        height={30}
                                        className={styles.contactIcons}
                                        title="Telegram"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}