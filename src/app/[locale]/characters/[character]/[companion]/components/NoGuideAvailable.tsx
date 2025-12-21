import type { CharaDataProps } from "@/app/utils/interfaces-data"
import { styles } from "@/app/utils/styles"
import { useTranslations } from "next-intl"
import Image from "next/image"
import type { relative } from "path"

export function NoGuideAvailable  ({
    character,
    companion
}: CharaDataProps) {

    const t = useTranslations('layout')

    return (
        <div className="w-full py-12 -mb-30">
            <hr className={styles.divider}></hr>
            <div className="text-center py-6 font-inknut flex flex-col gap-4">
                <p>{t('not-available')}</p>
                <p>{t('stay_tuned')}</p>
            </div>

            <Image
                src={`/images/idle-gifs/${character}.webp`}
                alt={`${character} kitty gif`}
                width={150}
                height={150}
                className="object-cover"

            />             

            </div>

    )
}