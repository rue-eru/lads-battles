'use client'

import { GameplayBlockRenderer } from "./GameplayBlockRenderer";
import type { SolarGameplayGuideBlock } from "@/app/utils/types/types-gameplay";

export default function SolarGameplayCard ({
    guide
}: {
    guide: SolarGameplayGuideBlock
}) {

    return (
        <section className="py-6">
            <GameplayBlockRenderer blocks={guide.blocks} />
        </section>
    )
}