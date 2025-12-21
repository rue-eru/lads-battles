'use client'

import { styles } from "@/app/utils/styles";
import type { StandardBlock } from "@/app/utils/types/types-gameplay";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "./Lightbox";


export function GameplayBlockRenderer({
    blocks
}: {
    blocks: StandardBlock[]
}){

    const t = useTranslations();
    const tGeneral = useTranslations('gameplay.general');

    const [openImage, setOpenImage] = useState<{
        src: string;
        alt: string;
    } | null>(null);

    return(
        <>
            <div className="flex flex-col gap-12">
            {blocks.map((block, index) => {
                switch (block.type) {

                    case 'paragraph':
                        return (
                            <p key={index}>
                                {t(block.content)}
                            </p>
                        );

                    case 'standard_summary': 
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
                                className="flex flex-col"
                            >
                                <div className="w-full h-100 relative">
                                <Image
                                    src={block.src}
                                    alt={t(block.alt)}
                                    fill
                                    className="object-contain cursor-zoom-in"
                                    onClick={() => 
                                        setOpenImage({
                                            src: block.src,
                                            alt: t(block.alt)
                                        })
                                    }
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
                                <div className="grid grid-cols-2 gap-1 -my-14">
                                    {block.images.map((img, index) => (
                                        <div
                                            key={index}
                                            className="relative w-full h-80"
                                        >
                                            <Image 
                                                src={img.src}
                                                alt={t(img.alt)}
                                                fill
                                                className="object-contain cursor-zoom-in"
                                                onClick={() =>
                                                    setOpenImage({
                                                        src: img.src,
                                                        alt: t(img.alt)
                                                    })
                                                }
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

            {openImage && (
                <Lightbox 
                    src={openImage.src}
                    alt={openImage.alt}
                    onClose={() => setOpenImage(null)}
                />
            )}
        
        </>
    )
}