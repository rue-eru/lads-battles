'use client'

import type { StandardGameplayGuideBlock } from "@/app/utils/types/types-gameplay";
import { GameplayBlockRenderer } from "./GameplayBlockRenderer";

export default function StandardGameplayCard ({
    guide
}: {
    guide: StandardGameplayGuideBlock
}) {

    return (
        <section className="py-6">
            <GameplayBlockRenderer blocks={guide.blocks} />
        </section>
    )
}