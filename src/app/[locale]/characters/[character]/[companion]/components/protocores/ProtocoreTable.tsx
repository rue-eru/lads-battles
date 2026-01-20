'use client'

import { ProtocoreTableProps } from "@/app/utils/interfaces-data";
import { CharacterId, charactersData } from "@/app/utils/loaders/character-data-loader";
import { useState } from "react";
import { rankData } from "@/app/utils/loaders/rank-loader";
import { useTranslations } from "next-intl";
import ProtocoreTableRow from "./ProtocoreTableRow";
import { styles } from "@/app/utils/styles";
import { TextRenderer } from "../glossary/TextRenderer";


export default function ProtocoreTable ({character, companion, stellactrum }: ProtocoreTableProps) {

    const [activeRank, setActiveRank] = useState('r0');
    const tRank = useTranslations('ranks');

    const charaData = charactersData[character as CharacterId];
    const companionData = charaData.companions.find(comp => comp.id === companion);

    const hasRankData = (rankData as any)[character]?.[companion];


    //  FOR STANDARD BETA AND DELTA AS ANY
    
    return (
        <div className="w-full text-left">
            { !hasRankData ? (
                /* STANDARD COMPANION PROTOCORE TABLE*/
                    <table className="w-full min-w-full table-auto">
                        <tbody>
                            <ProtocoreTableRow
                                protocoreType="alpha"
                                protocoreStat={companionData?.alpha || 'hp'}
                                stellactrum={stellactrum}

                            />
                            <ProtocoreTableRow
                                protocoreType="beta"
                                protocoreStat={companionData?.beta as any|| 'beta'}
                                stellactrum={stellactrum}

                            />
                            <ProtocoreTableRow
                                protocoreType="gamma"
                                protocoreStat={companionData?.gamma || 'atk'}
                                stellactrum={stellactrum}

                            />
                            <ProtocoreTableRow
                                protocoreType="delta"
                                protocoreStat={companionData?.delta as any|| 'delta'}
                                stellactrum={stellactrum}

                            />
                        </tbody>
                    </table>  
            ) : (

                /*SOLAR COMPANIONS WITH RANK BUTTON*/
                <div>
                    <div className="flex mb-4">
                        {['r0', 'r1', 'r2', 'r3'].map((rank) => (
                            <button
                                key={rank}
                                onClick={() => setActiveRank(rank)}
                                className={`px-4 font-medium font-accent border-l-2 border-white first:border-none cursor-pointer ${
                                    activeRank === rank 
                                        ? ' text-pink-400 ' 
                                        : 'text-white hover:bg-pink-400'
                                }`}
                            >
                                {tRank(`ranks.${rank}` as any)}
                            </button>
                        ))}
                    </div>    

                    <table className="w-full min-w-full table-auto border-collapse">
                        <tbody>
                            <ProtocoreTableRow
                                protocoreType="alpha"
                                protocoreStat={companionData?.alpha || 'hp'}
                                stellactrum={stellactrum}
                            />
                            <ProtocoreTableRow
                                protocoreType="beta"
                                protocoreStat={(rankData as any)[character]?.[companion]?.[activeRank]?.beta ||companionData?.beta || []}
                                stellactrum={stellactrum}
                            />
                            <ProtocoreTableRow
                                protocoreType="gamma"
                                protocoreStat={companionData?.gamma || 'atk'}
                                stellactrum={stellactrum}
                            />
                            <ProtocoreTableRow
                                protocoreType="delta"
                                protocoreStat={(rankData as any)[character]?.[companion]?.[activeRank]?.delta || companionData?.delta || [] }
                                stellactrum={stellactrum}
                            />
                        </tbody>
                    </table> 
                    <details className="text-justify">
                        <summary className={`${styles.tableRow} cursor-pointer p-2`}>{tRank('rDescriptionBtn')}</summary>
                        <p>
                            <TextRenderer>{tRank(`rankDescriptions.${character}.${companion}.${activeRank}` as any)}</TextRenderer>
                        </p>
                        {/*<p>{(rankData as any)[character]?.[companion]?.[activeRank]?.rank_description}</p>*/}
                        <p className="italic mt-4">{tRank("NB")}</p>
                    </details>
                </div>
            )}
        </div>
    )
}