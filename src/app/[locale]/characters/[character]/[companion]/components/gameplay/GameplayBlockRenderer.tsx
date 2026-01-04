'use client'

import { styles } from "@/app/utils/styles";
import type { GameplayBlock } from "@/app/utils/types/types-gameplay";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "./Lightbox";
import clsx from 'clsx';
import { TextRenderer } from "../glossary/TextRenderer";



export function GameplayBlockRenderer({
    blocks
}: {
    blocks: GameplayBlock[]
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
                                <TextRenderer>{t(block.content)}</TextRenderer>
                            </p>
                        );

                    case 'standard_summary': 
                        return (
                            <div
                                key={index}
                            >
                                <span>{tGeneral('standard_rotation')}</span>
                                <span className="font-semibold text-pink-400">
                                    <TextRenderer>{t(block.content)}</TextRenderer>
                                </span>
                            </div>
                        )

                    case 'image': 
                        return (
                            <figure
                                key={index}
                                className={`flex h-auto  flex-col ${styles.img_bg}`}
                            >
                                <div className={styles.imgHeightSoloOrSoloCapture}>
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

                    case 'imageGroupSharedCaption':
                        return (
                            <figure key={index} className={`${styles.img_bg}`}>
                                <div className="flex flex-col sm:gap-1">
                                    {/*maps only an image*/}
                                    {block.images.map((img, index) => (
                                        <div
                                            key={index}
                                            className={styles.imgHeightSoloOrSoloCapture}
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

                    case 'imageGroupPerImageCaption': {

                        const isUi = block.layout === 'ui';

                        return(
                            <div 
                                className={`lg:flex lg:flex-row sm:grid sm:grid-cols-1  gap-1 justify-evenly ${styles.img_bg}`} 
                                key={index}
                            >
                                {/*everything maps alltogether*/}
                                {block.images.map((img, index) => (
                                    <figure 
                                        key={index}
                                        className="space-y-2 flex-1"
                                    >
                                        <div className={clsx(
                                            'relative sm:w-full',
                                            isUi ? 'h-20' : 'h-48'
                                        )}>
                                            <Image
                                                src={img.src}
                                                alt={t(img.alt)}
                                                fill
                                                className={clsx(
                                                "cursor-zoom-in",
                                                isUi ? "object-contain" : 'object-contain')}
                                                onClick={() =>
                                                    setOpenImage({
                                                        src: img.src,
                                                        alt: t(img.alt)
                                                    })
                                                }
                                            />
                                        </div>

                                        {img.caption && (
                                            <figcaption className={styles.figcaptionStyle}>
                                                {t(img.caption)}
                                            </figcaption>
                                        )}
                                    </figure>

                                ))}

                            </div>
                        )}

                    case 'rotationList':
                        return(
                            <div className="border">
                                <ul className="list-['∘'] p-6 list-outside">
                                    {block.content.map((li, index) => (
                                        <li
                                            key={index}
                                            className="font-bold text-justify pl-2"
                                        >
                                            <TextRenderer key={index}>{t(li)}</TextRenderer>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        )

                    case 'orderedList':
                        return(
                            <ol className="list-decimal list-inside">
                                {block.content.map((li, index) => (
                                    <li
                                        key={index}
                                        className="font-bold text-justify pl-2"
                                    >
                                        <TextRenderer key={index}>{t(li)}</TextRenderer>
                                    </li>
                                ))}
                            </ol>
                        )

                    case 'unorderedList':
                        return(
                            <ul className="list-['∘'] list-outside">
                                {block.content.map((li, index) => (
                                    <li
                                        key={index}
                                        className="pl-2"
                                    >
                                        <TextRenderer key={index}>{t(li)}</TextRenderer>
                                    </li>
                                ))}
                            </ul>
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