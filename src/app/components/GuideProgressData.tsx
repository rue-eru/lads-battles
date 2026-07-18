'use client'

import { charactersData } from "@/app/utils/loaders/character-data-loader";
import { useLocale, useTranslations } from "next-intl";
import { languages } from "@/app/utils/languageNames";
import { useState } from "react";
import { guideLocales } from "@/data/guideLocaleAvailability";
import { BorderedButtonGroup } from "./ui/BorderedButtonGroup";
import Image from "next/image";

export default function GuideProgressData() {
    const currentLocale = useLocale();
    const t = useTranslations();
    const tCompanions = useTranslations('characters.companions');
    
    // State for selected locale (defaults to current)
    const [selectedLocale, setSelectedLocale] = useState(currentLocale);
    const allLocales = ['en', 'ru', 'ja'];

    const hasGuideInLocale = (companionId: string, locale: string) => {
        const locales = guideLocales[companionId] || [];
        return locales.includes(locale);
    };

    const getCharacterCompanions = (characterId: string) => {
        return charactersData[characterId]?.companions || [];
    };

    const getCharacterStats = (characterId: string) => {
        const companions = getCharacterCompanions(characterId);
        const total = companions.length;
        const available = companions.filter(c => 
            hasGuideInLocale(c.id, selectedLocale)
        ).length;
        return { total, available, percentage: total > 0 ? Math.round((available / total) * 100) : 0 };
    };

    const characterIds = Object.keys(charactersData);

    return (
        <div className="w-full font-accent">

            {/*Lang locale toggle*/}
            <BorderedButtonGroup 
                items={allLocales}
                activeItem={selectedLocale}
                onSelect={(item) => setSelectedLocale(item as "en" | "ja" | "ru")}
                getLabel={(locale) => languages.find(l => l.code === locale)?.name || locale}
                getKey={(locale) => locale}
                className="justify-end my-4"
            /> 


            <div className="grid grid-cols-1 md:grid-cols-2">
                
                {characterIds.map(characterId => {
                    const companions = getCharacterCompanions(characterId);
                    const stats = getCharacterStats(characterId);
                    const tChara = t(`characters.chNames.${characterId}`)
                    
                    return (
                        <div 
                            key={characterId}
                            className="border-lightgray
                                md:border-2 
                                md:even:border-l-0
                                md:nth-[-n+4]:border-b-0
                                border-x-2 last:border-2
                            "
                        >

                            {/* Character Header */}
                            <div className="bg-lightgray px-4 py-3 border-b border-gray-700 flex justify-between items-center">
                                <a 
                                    href={`/characters/${characterId}`}
                                    title={t('layout.guide-progress-section.character-link-title', {character: tChara})}
                                >
                                    <h3 className="font-medium text-base uppercase tracking-wider cursor-pointer hover:text-pink-500">
                                        {tChara}
                                    </h3>
                                </a>
                                
                                <div className="flex items-center gap-4 font-mono font-extralight">
                                    <span className={`text-sm ${
                                        stats.percentage === 100 ? 'text-green-400' : 
                                        stats.percentage > 0 ? 'text-yellow-400' : 'text-aliceblue'
                                    }`}>
                                        {stats.available}/{stats.total}
                                    </span>
                                    <div className="w-20 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full transition-all duration-500 ${
                                                stats.percentage === 100 ? 'bg-green-400' : 
                                                stats.percentage > 0 ? 'bg-yellow-400' : 'bg-gray-500'
                                            }`}
                                            style={{ width: `${stats.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Companion Data Table rows */}
                            <div>
                                <table className="w-full text-sm">

                                    <thead>
                                        <tr>
                                            <th className="text-left py-2 px-3 text-xs uppercase tracking-wider text-gray-500">
                                             {t('layout.guide-progress-section.companion')}   
                                            </th>
                                            <th className="text-right py-2 px-3 text-xs uppercase tracking-wider text-gray-500 text-nowrap">
                                             {t('layout.guide-progress-section.status')}   
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {companions.map(companion => {
                                            const isAvailable = hasGuideInLocale(companion.id, selectedLocale);

                                            const iconChoice = isAvailable 
                                                ? `check` 
                                                : `cross`

                                            const tComp = tCompanions(`${characterId}.${companion.id}`)

                                            return (
                                                <tr 
                                                    key={companion.id}
                                                    className="hover:bg-gray-800/30 transition-colors w-full"
                                                >
                                                    <td className="py-2 px-3 text-xs whitespace-nowrap capitalize hover:text-pink-400 cursor-pointer md:w-4/5 w-6/7">
                                                        <a 
                                                            href={`/characters/${characterId}/${companion.id}`}
                                                            title={t('layout.guide-progress-section.companion-link-title', {companion: tComp})}
                                                            >
                                                            
                                                            {tCompanions(companion.nameKey as any)}
                                                        </a>
                                                    </td>

                                                    <td className="flex justify-center items-center py-2">
                                                        <Image
                                                            src={`/images/icons/${iconChoice}.png`}
                                                            alt={`${iconChoice} icon`}
                                                            width={12}
                                                            height={12}
                                                            className="object-cover w-3 h-3"
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}