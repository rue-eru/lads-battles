'use client'

import type { CharaDataProps } from "@/app/utils/interfaces-data";
import { getGameplayGuide } from "@/app/utils/loaders/gameplay-loader";
import type { StandardGameplayGuideBlock } from "@/app/utils/types/types-gameplay";
import { useTranslations } from "next-intl";
import { GameplayBlockRenderer } from "./GameplayBlockRenderer";

export default function StandardGameplayCard ({character, companion}: CharaDataProps) {

    const tGeneral = useTranslations('gameplay.general');

    const guide = getGameplayGuide(character as any, companion);


   if (!guide) {
    return <p className="text-red-500 font-bold italic">{tGeneral('no-data')}</p>
   }

   if (guide.type !== 'standard') {
    return null
   }

   const standardGuide = guide as StandardGameplayGuideBlock;


    return (
        <section className="py-6">
            <GameplayBlockRenderer blocks={standardGuide.blocks} />
        </section>
    )
}