'use client'

import RandomKittyGenerator from "@/app/components/ui/RandomKittyGenerator"
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage"
import { getOtherAvailableLocales } from "@/app/utils/guide-locale-helpers"
import type { NoGuideAvailableProps } from "@/app/utils/interfaces-data"
import { styles } from "@/app/utils/styles"
import { useLocale, useTranslations } from "next-intl"
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


    const otherAvailableLocales = hasGuideFile && availableLocales.length > 0
        ? getOtherAvailableLocales(currentLocale, availableLocales)
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
                        <RandomKittyGenerator
                            kittyChara={character}
                            className="w-40 h-auto"
                        />
                    </div>
                </div>
            )}            

            </div>

    )
}