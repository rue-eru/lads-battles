'use client'

import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage"
import type { NoGuideAvailableProps } from "@/app/utils/interfaces-data"
import { languages } from "@/app/utils/languageNames"
import { styles } from "@/app/utils/styles"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function NoGuideAvailable  ({
    character, 
    companion,
    hasGuideFile,
    availableLocales
}: NoGuideAvailableProps) {

    const t = useTranslations('layout');
    const currentLocale = useLocale();
    const {isJa} = useCurrentLanguage();

    const [positionClass, setPositionClass ] = useState('');

    useEffect(() => {

        const positions = [
            'sm:col-start-1',
            'sm:col-start-2',
            'sm:col-start-3',
            'sm:col-start-4',
            'sm:col-start-5',
        ]

        setPositionClass(positions[Math.floor(Math.random() * positions.length)])

    }, [])

    const showLocaleLinks = hasGuideFile && availableLocales.length > 0;

    const otherAvailableLocales = showLocaleLinks
        ? availableLocales
            .filter(l => l !== currentLocale)
            .map(code => ({
                code,
                name: languages.find(lang => lang.code === code)?.name || code
            }))
        : [];

    return (
        <div className="w-full py-12 -mb-30">
            <hr className={styles.divider}></hr>
            <div className="text-center py-6 font-accent flex flex-col gap-4">
                <p>{t('not-available')}</p>
                    {otherAvailableLocales.length > 0 && (
                        <p>
                            {t('available-in')}
                            {otherAvailableLocales.map((locale, index)  => (
                                <span key={locale.code}>
                                    <Link
                                        href={`/${locale.code}/characters/${character}/${companion}`}
                                        className="hover:text-pink-400 cursor-pointer underline uppercase"
                                    >
                                        {locale.name}
                                    </Link>
                                    {index < otherAvailableLocales.length -1 && " / "}
                                </span>
                            ))}
                            {isJa && <span>ではあります！</span>}
                        </p>
                    )}
                <p>{t('stay_tuned')}</p>
            </div>

            {positionClass && (
                <div className="grid grid-cols-5 place-items-center">
                    <div className={`col-span-1 col-start-3 w-45 ${positionClass}`}>
                        <Image
                            src={`/images/others/${character}.webp`}
                            alt={`${character} kitty gif`}
                            width={150}
                            height={150}
                            className="object-cover w-40 h-auto"
                            priority
                        /> 
                    </div>
                </div>
            )}
            

            </div>

    )
}