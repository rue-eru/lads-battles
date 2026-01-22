'use client'

import { useTranslations } from "next-intl"
import { styles } from "../utils/styles";
import Image from "next/image";
import Link from "next/link";
import type { ErrorPageProps } from "../utils/interfaces-data";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { characters } from "../utils/loaders/character-data-loader";



export default function ErrorPage({ code, title, description, name }: ErrorPageProps) {
    const tError = useTranslations(`errors.${code}`);
    const tNames = useTranslations('characters.chNames');
    const tLayout = useTranslations('layout');
    const t = useTranslations();
    const {isJa} = useCurrentLanguage();

    const basicFont = isJa ? 'font-noto-serif-jp' : 'font-source-serif-4';

    const getKittyName = () => {
        let name = characters[Math.floor(Math.random() * characters.length)];
        return name;
    }

    const kittyName = getKittyName();

    const characterNameKey = tNames(kittyName as any);

    const getkittyColor = () => {
        switch (kittyName) {
            case 'xavier': return `text-blue-300`;
            case 'zayne': return `text-blue-600`;
            case 'rafayel': return `text-purple-400`;
            case 'sylus': return `text-red-400`;
            case 'caleb': return `text-yellow-400`;
    }}

    const kittyColor = getkittyColor();

    const renderDescription = () => {
        const parts = description.split('{name}');
        if (parts.length === 1) return description;

        return (
            <>
                {parts[0]}
                <span className={`capitalize ${kittyColor}`}>
                    {characterNameKey}
                </span>
            </>
        )
    }

    return(
        <div className={styles.pageStructure}>
        <div className={styles.pagelayout}>
            <div className={styles.contentlayout}>

                <hr className={styles.divider}></hr>


                <div className="mx-auto h-auto font-source-serif-4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-9xl">{code}</h1>
                        <h2 className={`${basicFont} text-2xl`}>{title}</h2>
                    </div>
                    <p className="py-4">
                        {renderDescription()}
                    </p>
                </div>

               <div className="flex justify-center items-center mx-auto gap-4">

                    <Link href="/">
                        <button className="bg-lightgray flex flex-row justify-center items-center gap-2 p-3 border rounded-3xl cursor-pointer">
                            <Image
                                src="/images/icons/home.png"
                                alt="Home Logo > Home Link"
                                width={20}
                                height={20}
                                className="object-cover"
                            />
                            <p className="uppercase font-inknut">{tLayout('home-btn')}</p>
                        </button>
                    </Link>
                        <Image
                            src={`/images/others/${kittyName}.webp`}
                            alt={`${kittyName} kitty gif`}
                            width={150}
                            height={150}
                            className="object-cover"
                            unoptimized
                        />                 
                </div>
                <hr className={styles.divider}></hr>
            </div>
        </div>
        </div>
    )
}