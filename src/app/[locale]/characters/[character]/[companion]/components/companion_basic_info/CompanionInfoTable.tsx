'use client'

import { CharacterId, charactersData } from "@/app/utils/loaders/character-data-loader";
import { CharaDataProps } from "@/app/utils/interfaces-data";
import TableRow from "./TableRow";
import { useTranslations } from 'next-intl';


export default function CompanionInfoTable ( {character, companion} : CharaDataProps
) {

    const charaData = charactersData[character as CharacterId];
    const companionData = charaData.companions.find(comp => comp.id === companion);

    const hasDetailedData = companionData?.role || companionData?.scaling || companionData?.type;

    const t = useTranslations('characters');
    const translateValue = (category: string, key: string | undefined) => {
        if (!key) return 'Coming soon...';
        return t(`${category}.${key}` as any)
    }


    return (
        <div className="w-full overflow-x-auto">
            { !hasDetailedData ? ( <div>Coming soon...</div>) : (

            <table className="w-full min-w-full table-auto">
                <tbody>
                    {companionData.type === 'solar' && (
                        <TableRow 
                            label={t('table.rarity')}
                            value={companionData.rarity} 
                        />
                    )}
                    <TableRow 
                        label={t('table.role')}
                        value={translateValue('roles', companionData.role)} 
                    />
                    <TableRow 
                        label={t('table.scaling')}
                        value={translateValue('scaling', companionData.scaling)} 
                    />
                    <TableRow 
                        label={t('table.best')}
                        value={translateValue('best' ,companionData.best)} 
                    />
                    <TableRow 
                        label={t('table.specialty')}
                        value={translateValue('specialty' ,companionData.specialty)} 
                    />
                    <TableRow 
                        label={t('table.unlock')}
                        value={translateValue('unlock', companionData.unlock)} 
                    />
                    {companionData.type === 'solar' && companionData.solarPair && (
                        <TableRow 
                            label={t('table.solarPair')}
                            value={
                                <div className="flex gap-2">
                                    <img 
                                        src={`/images/solar_pairs/${character}/${companionData.id}/${companionData.solarPair}-1.webp`}
                                        alt="Solar pair card 1"
                                        className="w-12 h-12 object-cover rounded "
                                    />
                                    <img 
                                        src={`/images/solar_pairs/${character}/${companionData.id}/${companionData.solarPair}-2.webp`}
                                        alt="Solar pair card 2"
                                        className="w-12 h-12 object-cover rounded "
                                    />
                                </div>
                            }
                        />
                    )}
                </tbody>
            </table>
            )}
        </div>
    )

}