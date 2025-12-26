'use client'

import { CharaDataProps } from "@/app/utils/interfaces-data";
import { CharacterId, charactersData } from "@/app/utils/loaders/character-data-loader";
import { useState } from "react";
import { rankData } from "@/app/utils/loaders/rank-loader";
import { useTranslations } from "next-intl";
import ProtocoreTableRow from "./ProtocoreTableRow";
import { styles } from "@/app/utils/styles";


export default function ProtocoreTable ({character, companion} : CharaDataProps) {

    const [activeRank, setActiveRank] = useState('r0');
    const tRank = useTranslations('ranks');


    
    const charaData = charactersData[character as CharacterId];
    const companionData = charaData.companions.find(comp => comp.id === companion);

    const hasRankData = (rankData as any)[character]?.[companion];


    //  FOR STANDARD BETA AND DELTA AS ANY
    
    return (
        <div className="w-full">
            { !hasRankData ? (
                /* STANDARD COMPANION PROTOCORE TABLE*/
                    <table className="w-full min-w-full table-auto">
                        <tbody>
                            <ProtocoreTableRow
                                protocoreType="alpha"
                                protocoreStat={companionData?.alpha || 'hp'}
                                stellactrum={companionData?.stellactrum}

                            />
                            <ProtocoreTableRow
                                protocoreType="beta"
                                protocoreStat={companionData?.beta as any|| 'default_beta'}
                                stellactrum={companionData?.stellactrum}

                            />
                            <ProtocoreTableRow
                                protocoreType="gamma"
                                protocoreStat={companionData?.gamma || 'atk'}
                                stellactrum={companionData?.stellactrum}

                            />
                            <ProtocoreTableRow
                                protocoreType="delta"
                                protocoreStat={companionData?.delta as any|| 'delta'}
                                stellactrum={companionData?.stellactrum}

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
                                className={`px-4 font-medium font-inknut border-l-2 border-white first:border-none cursor-pointer ${
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
                                stellactrum={companionData?.stellactrum}
                            />
                            <ProtocoreTableRow
                                protocoreType="beta"
                                protocoreStat={(rankData as any)[character]?.[companion]?.[activeRank]?.beta ||companionData?.beta || []}
                                stellactrum={companionData?.stellactrum}
                            />
                            <ProtocoreTableRow
                                protocoreType="gamma"
                                protocoreStat={companionData?.gamma || 'atk'}
                                stellactrum={companionData?.stellactrum}
                            />
                            <ProtocoreTableRow
                                protocoreType="delta"
                                protocoreStat={(rankData as any)[character]?.[companion]?.[activeRank]?.delta || companionData?.delta || [] }
                                stellactrum={companionData?.stellactrum}
                            />
                        </tbody>
                    </table> 
                    <details>
                        <summary className={`${styles.tableRow} cursor-pointer p-2`}>Rank Description</summary>
                        <p>{tRank(`rankDescriptions.${character}.${companion}.${activeRank}` as any)}</p>
                        {/*<p>{(rankData as any)[character]?.[companion]?.[activeRank]?.rank_description}</p>*/}
                        <p>{tRank("NB")}</p>
                    </details>
                </div>
            )}
        </div>
    )
}