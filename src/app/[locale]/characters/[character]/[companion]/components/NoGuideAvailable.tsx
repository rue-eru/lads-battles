'use client'

import type { CharaDataProps } from "@/app/utils/interfaces-data"
import { styles } from "@/app/utils/styles"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"

export function NoGuideAvailable  ({
    character,
}: CharaDataProps) {

    const t = useTranslations('layout');

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


    return (
        <div className="w-full py-12 -mb-30">
            <hr className={styles.divider}></hr>
            <div className="text-center py-6 font-accent flex flex-col gap-4">
                <p>{t('not-available')}</p>
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