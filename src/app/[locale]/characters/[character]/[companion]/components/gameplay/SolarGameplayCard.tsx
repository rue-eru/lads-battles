'use client'

import type { CharaDataProps } from "@/app/utils/interfaces-data";
import { getGameplayGuide } from "@/app/utils/loaders/gameplay-loader";
import type { SolarGameplayGuideBlock } from "@/app/utils/types/types-gameplay";
import { useTranslations } from "next-intl";
import { GameplayBlockRenderer } from "./GameplayBlockRenderer";

export default function SolarGameplayCard ({character, companion}: CharaDataProps) {

    const tGeneral = useTranslations('gameplay.general');

    const guide = getGameplayGuide(character as any, companion);


   if (!guide) {
    return <p className="text-red-500 font-bold italic">{tGeneral('no-data')}</p>
   }

   if (guide.type !== 'solar') {
    return null
   }

   const solarGuide = guide as SolarGameplayGuideBlock;


    return (
        <section className="py-6">
            <GameplayBlockRenderer blocks={solarGuide.blocks} />
        </section>
    )
}