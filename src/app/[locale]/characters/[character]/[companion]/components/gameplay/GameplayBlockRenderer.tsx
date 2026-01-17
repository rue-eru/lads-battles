'use client'

import { styles } from "@/app/utils/styles";
import type { GameplayBlock } from "@/app/utils/types/types-gameplay";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "./Lightbox";
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
                            <p key={`${block.type}-${index}-${Date.now()}`}>
                                <TextRenderer>{t(block.content)}</TextRenderer>
                            </p>
                        );

                    case 'standard_summary': 
                        return (
                            <div
                                key={`${block.type}-${index}-${Date.now()}`}
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
                                key={`${block.type}-${index}-${Date.now()}`}
                                className={`flex flex-col ${styles.img_bg}`}
                            >
                                <div className={styles.imgHeight}>
                                <Image
                                    src={block.src}
                                    alt={t(block.alt)}
                                    fill
                                    className={styles.imgFillContainer}
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
                                <div className="flex flex-col gap-1">
                                    {/*maps only an image*/}
                                    {block.images.map((img, index) => (
                                        <div
                                            key={`${block.type}-${index}-${Date.now()}`}
                                            className={styles.imgHeight}
                                        >
                                            <Image 
                                                src={img.src}
                                                alt={t(img.alt)}
                                                fill
                                                className={styles.imgFillContainer}
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
                        const directionLayoutGRID = block.directionLayout === 'grid-col';

                        return(
                            <div 
                                className={`${directionLayoutGRID 
                                    ? "grid grid-cols-1 gap-4"
                                    : "md:flex md:flex-row md:flex-wrap grid grid-cols-1 gap-1 justify-evenly"
                                }
                                    ${styles.img_bg}`} 
                                key={index}
                            >
                                {/*everything maps alltogether*/}

                                {block.images.map((img) => {
                                    // for smaller images with important info being cut of on the display
                                    const objPositionMap = {
                                        left: 'object-left',
                                        right: 'object-right',
                                        top: 'object-top',
                                        center: 'object-center'
                                    } as const;

                                    const positionClass =
                                        img.layout ? objPositionMap[img.layout] : "object-center";
                                        
                                    
                                    return(
                                    <figure 
                                        key={`${block.type}-${img.src}`}
                                        className="flex-1 w-full h-auto"
                                    >
                                            <div className={`relative ${directionLayoutGRID
                                                ? 'h-20 sm:h-40 md:h-50'
                                                : ' lg:h-50 h-60'
                                            }`}>
                                                <Image
                                                    src={img.src}
                                                    alt={t(img.alt)}
                                                    fill
                                                    className={`${styles.imgFillContainer} ${positionClass}`}
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
                                    </figure>)}
                                    
                                )}
                            </div>

                        )}

                    case 'rotationList':
                        return(
                            <div className="border">
                                <ul className="list-['∘'] p-6 list-outside">
                                    {block.content.map((li, index) => (
                                        <li
                                            key={`${block.type}-${index}-${Date.now()}`}
                                            className="font-bold text-justify pl-2"
                                        >
                                            <TextRenderer>{t(li)}</TextRenderer>
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
                                        key={`${block.type}-${index}-${Date.now()}`}
                                        className="font-bold text-justify pl-2"
                                    >
                                        <TextRenderer>{t(li)}</TextRenderer>
                                    </li>
                                ))}
                            </ol>
                        )

                    case 'unorderedList':
                        return(
                            <ul className="list-['∘'] list-outside">
                                {block.content.map((li, index) => (
                                    <li
                                        key={`${block.type}-${index}-${Date.now()}`}
                                        className="pl-2"
                                    >
                                        <TextRenderer>{t(li)}</TextRenderer>
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