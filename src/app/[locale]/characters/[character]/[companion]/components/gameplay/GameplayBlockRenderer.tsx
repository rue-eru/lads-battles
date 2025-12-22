'use client'

import { styles } from "@/app/utils/styles";
import type { GameplayBlock } from "@/app/utils/types/types-gameplay";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "./Lightbox";


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

                    case 'imageGroupSharedCaption':
                        return (
                            <figure key={index} className="">
                                <div className="grid grid-cols-2 gap-1 -my-14">
                                    {/*maps only an image*/}
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

                    case 'imageGroupPerImageCaption':
                        return(
                            <div 
                                className="grid grid-cols-2 gap-6"
                                key={index}
                            >
                                {/*everything maps alltogether*/}
                                {block.images.map((img, index) => (
                                    <figure 
                                        key={index}
                                        className="space-y-2"
                                    >
                                        <div className="relative w-full h-48">
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

                                        {img.caption && (
                                            <figcaption className={styles.figcaptionStyle}>
                                                {t(img.caption)}
                                            </figcaption>
                                        )}
                                    </figure>

                                ))}

                            </div>
                        )

                    case 'rotationList':
                        return(
                            <div className="border">
                                <ul className="list-['∘'] p-6 list-outside">
                                    {block.content.map((li, index) => (
                                        <li
                                            key={index}
                                            className="font-bold text-justify pl-2"
                                        >
                                            {t(li)}
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
                                        {t(li)}
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
                                        {t(li)}
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