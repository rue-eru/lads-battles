import CopyWrapper from "@/app/components/CopyWrapper";
import Spoiler from "@/app/components/Spoiler";
import { styles } from "@/app/utils/styles";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Contact () {

    const tLayout = useTranslations('layout');
    const tCommon = useTranslations('home');
    const uid = process.env.NEXT_PUBLIC_GAME_UID || "";;
    const email = process.env.NEXT_PUBLIC_EMAIL || "";

    const maskedEmail = (email: string) => {
        const [local, domain] = email.split('@');
        return local.charAt(0) + '*'.repeat(local.length - 1) + '@' + domain;
    }

    const maskedUID = (uid: string) => {
        const parts = uid.split(' '); // splits into parts by a whitespase
        const maskedNums = '*'.repeat(parts[2].length);
        const maskedName = "*".repeat(parts[2].length);

        return `${parts[0]} ${maskedNums} ${maskedName}`;
    }

    const maskEmail = maskedEmail(email);
    const maskUID = maskedUID(uid);

    return(
        <div>
            <div className={styles.pagelayout}>
                <div className={styles.contentlayout}>
                    <h1 className={styles.h1}>{tLayout('contact')}</h1>
                    <hr className={styles.divider}></hr>
                    <p>{tCommon('contacts_intro')}</p>
        
                    <div className="flex flex-col sm:flex-row items-center sm:gap-4 w-full">
                        <div className="font-accent font-semibold">{tLayout('email')}</div>
                        <CopyWrapper text={email}>
                            <Spoiler text={maskEmail} />
                        </CopyWrapper>
                    </div>
        
        
                    <p className="mt-4 w-full">{tCommon('contacts_thanks')}</p>
        
                    <div className="flex flex-col sm:flex-row items-center sm:gap-2  w-full">
                        <div className="font-accent font-semibold">{tLayout('ingame_info')}</div>

                        <CopyWrapper text={uid}>
                            <Spoiler text={maskUID} />
                        </CopyWrapper>

                    </div>
        
        
                    <div className="grid grid-cols-5 place-items-center justify-center">

                        <div className="col-start-3 sm:col-start-5 w-45">
                            <Image
                                alt="kitty raf"
                                src={`/images/others/rafayel.webp`}
                                width={200}
                                height={200}
                                className="object-covers z-50"
                                priority
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
                                        priority
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
                                        priority
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
                                        priority
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