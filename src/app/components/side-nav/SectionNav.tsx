import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";


export default function SectionNav () {

    const t = useTranslations();
    const pathname = usePathname();
    const [isCompanionPage, setIsCompanionPage] = useState(false);

    const scrollToId = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        })
    }

    useEffect(() => {
        const segments = pathname.split('/').filter(Boolean);
        const companionPageCheck = 
            segments.length === 4 &&
            segments[1] === "characters";    
        setIsCompanionPage(companionPageCheck);
    }, [pathname])

    const sections = [
        { id: "protocoreSection", labelKey: "protocores.header"}, 
        { id: "skillWeaponSection", labelKey: "skills.header"},
        { id: "gameplaySection", labelKey: "gameplay.general.header"}
    ];

    if (!isCompanionPage) {
        return null
    }

    const availableSections = sections.filter(section => {
        return document.getElementById(section.id) !== null;
    })

    if (availableSections.length === 0) {
        return null
    }

    return(
        <div className="pl-4 mt-4">
            {/*to a section by #id only opens on http://localhost:3000/en/characters/${character}/${companion}
            section ids: protocoreSection, skillWeaponSection, gameplaySection*/}
                    <p className="uppercase">{t('layout.goSection')}</p>
                    <ul className="text-left list-none list-inside  pt-4 ">
                        {availableSections.map(section => (
                            <li className="mb-4 hover:text-pink-400">
                                <button
                                    key={section.id}
                                    onClick={() => scrollToId(section.id)}
                                >
                                    {t(section.labelKey)}
                                </button>
                            </li>
                        ))}
                    </ul>
        </div>
    )
}