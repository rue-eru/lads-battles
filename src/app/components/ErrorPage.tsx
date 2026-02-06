'use client'

import { useTranslations } from "next-intl"
import { styles } from "../utils/styles";
import Image from "next/image";
import Link from "next/link";
import type { ErrorPageProps } from "../utils/interfaces-data";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { characters } from "../utils/loaders/character-data-loader";

export default function ErrorPage({ code, onRetry }: ErrorPageProps) {
    const t = useTranslations();
    const {isJa} = useCurrentLanguage();

    const basicFont = isJa ? 'font-noto-serif-jp' : 'font-source-serif-4';

    const getKittyName = () => {
        let name = characters[Math.floor(Math.random() * characters.length)];
        return name;
    }

    const kittyName = getKittyName()

    const getkittyColor = () => {
        switch (kittyName) {
            case 'xavier': return `text-blue-300`;
            case 'zayne': return `text-lime-600`;
            case 'rafayel': return `text-purple-400`;
            case 'sylus': return `text-red-400`;
            case 'caleb': return `text-yellow-400`;
    }}

    const kittyColor = getkittyColor();

    const title = t(`errors.${code}.title`)

    // for rich text
    const description = `errors.${code}.description`;

    const description1 = t(`errors.${code}.description1`);
    const description2 = t(`errors.${code}.description2`);
    const name = t(`characters.chNames.${kittyName}`);

    return(
        <div className={styles.pagelayout}>
            <div className={`${styles.contentlayout} ${basicFont} `}>

                <hr className={styles.divider}></hr>


                <div className="mx-auto h-auto ">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-9xl font-source-serif-4">{code}</h1>
                        <h2 className="text-2xl">{title}</h2>
                    </div>
                    <div className="py-4">
                        {/* for some reason next-intl's rich text doesnt pass attributes in next 16, so it was decided to go in a more straightforward way with a key separation instead for now

                        {t.rich(description, 
                            {name: kittyName}, 
                            {style: (chunks: string) => <div className={`capitalize ${kittyColor}`}>{chunks}</div>}
                        )}
                        */}
                        <p>
                            {description1}
                            <span className={`capitalize ${kittyColor}`}>{name}</span>
                            {description2}    
                        </p>         
                    </div>
                </div>

               <div className="flex flex-col sm:flex-row-reverse justify-center items-center mx-auto sm:gap-4 -mt-10">

                    <Image
                            src={`/images/others/${kittyName}.webp`}
                            alt={`${kittyName} kitty gif`}
                            width={150}
                            height={150}
                            className="object-cover"
                    />   

                    <div className="flex gap-4">

                        <Link href="/">
                            <button className={styles.errorBtns}>
                                <Image
                                    src="/images/icons/home.png"
                                    alt="Home Logo > Home Link"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                                <p className={`${basicFont} ${code === 404 ? "" : "sm:block hidden"}`}>{t('layout.home-btn')}</p>
                            </button>
                        </Link>

                        {onRetry && (
                            <button
                                onClick={onRetry}
                                className={styles.errorBtns}
                            >
                               <Image
                                    src="/images/icons/retry.png"
                                    alt="Retry Button Icon"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                                <p className={`${basicFont} sm:block hidden`}>{t('layout.retry-btn')}</p>
                            </button>
                        )}
                    </div>
              
                </div>
                <hr className={styles.divider}></hr>
            </div>
        </div>
    )
}