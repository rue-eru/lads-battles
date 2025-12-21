'use client'

import type { CharaDataProps } from "@/app/utils/interfaces-data";
import { getGameplayGuide } from "@/app/utils/loaders/gameplay-loader";
import { styles } from "@/app/utils/styles";
import type { StandardGameplayGuideBlock } from "@/app/utils/types/types-gameplay";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function StandardGameplayCard ({character, companion}: CharaDataProps) {

    const tGeneral = useTranslations('gameplay.general');
    const t = useTranslations();

    const guide = getGameplayGuide(character as any, companion);


   if (!guide) {
    return <p>{tGeneral('no-data')}</p>
   }

   if (guide.type !== 'standard') {
    return null
   }

   const standardGuide = guide as StandardGameplayGuideBlock;


    return (
        <div className="py-6 grid gri-cols gap-12">
            
            {standardGuide.blocks.map((block, index) => {
                switch (block.type) {

                    case 'paragraph':
                        return (
                            <p key={index}>
                                {t(block.content)}
                            </p>
                        );

                    case 'summary': 
                        return (
                            <div
                                key={index}
                            >
                                <span>{tGeneral('standard_rotation')}</span>
                                <span className="font-semibold text-pink-400">{t(block.content)}</span>
                            </div>
                        )

                    case 'image': 
                        return (
                            <figure
                                key={index}
                                className="flex flex-col -mb-18"
                            >
                                <div className="w-full h-100 relative">
                                <Image
                                    src={block.src}
                                    alt={t(block.alt)}
                                    fill
                                    className="object-contain" 
                                />
                                </div>
                                {block.caption && (
                                    <figcaption className={styles.figcaptionStyle}>
                                        {t(block.caption)}
                                    </figcaption>
                                )}
                            </figure>
                        )

                    case 'imageGroup':
                        return (
                            <figure key={index} className="">
                                <div className="grid grid-cols-2 gap-1 -mb-14">
                                    {block.images.map((img, index) => (
                                        <div
                                            key={index}
                                            className="relative w-full h-80"
                                        >
                                            <Image 
                                                src={img.src}
                                                alt={t(img.alt)}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                    {block.caption && (
                                        <figcaption className={styles.figcaptionStyle}>
                                            {t(block.caption)}
                                        </figcaption>
                                    )}
                            </figure>
                        )
                }
            })}

        </div>
    )
}