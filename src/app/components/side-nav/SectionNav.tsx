import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { styles } from "@/app/utils/styles";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";


export default function SectionNav () {

    const t = useTranslations();
    const pathname = usePathname();
    const [isCompanionPage, setIsCompanionPage] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const {isRu, isEn, isJa} = useCurrentLanguage();

    const scrollToId = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        })
        setIsExpanded(false); //for sm to be closed
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

    const ruBtn = isRu ? "uppercase text-[14px] -ml-0.5" : "";
    const ruLi = isRu? "text-[14px] capitalize!" : "";
    const enBtn = isEn ? "uppercase text-[12px] -ml-1.5": "";
    const jaBtn = isJa ? "-ml-1.5" : "";

    return(
        <div >
            {/*to a section by #id only opens on http://localhost:3000/en/characters/${character}/${companion}
            section ids: protocoreSection, skillWeaponSection, gameplaySection*/}

                {/* sm and md screens*/}
                    <div className="lg:hidden">
                        {!isExpanded ? (
                            <button
                                onClick={() => setIsExpanded(true)}
                                className={styles.floatBtnStyleLetters}
                            ><p className={`${ruBtn} ${enBtn} ${jaBtn}`}>{t('layout.goSectionSM')}</p>
                            </button>
                        ) : (
                            <div className={`bg-darkgray flex rounded-2xl ${isExpanded ? "border" : ''}`}>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className={`${styles.floatBtnStyle} ${isExpanded ? "border-none" : ""}`}
                                ><span className={`${ruBtn} ${enBtn} ${jaBtn}`}>{t('layout.goSectionSM')}</span>
                                </button>
                                <ul className="text-left list-none list-inside px-4">
                                    {availableSections.map(section => (
                                        <li className="my-0.5 hover:text-pink-400">
                                            <button
                                                key={section.id}
                                                onClick={() => scrollToId(section.id)}
                                            >
                                                <span className={`text-center uppercase text-[12px] ${ruLi}`}>{t(section.labelKey)}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* lg+ */}
                    <div className="hidden lg:block">
                        <p className="uppercase">{t('layout.goSection')}</p>
                        <ul className="text-left list-none list-inside  pt-4 ">
                            {availableSections.map(section => (
                                <li className="mb-4 ml-4 hover:text-pink-400">
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

        </div>
    )
}