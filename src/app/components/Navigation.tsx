'use client'

import Image from "next/image"
import {Link} from "@/i18n/navigation"
import LanguageSwitch from "./LanguageSwitch"
import SearchInput from "./SearchInput"
import { useState } from "react"
import { useTranslations } from "next-intl"
export default function Navigation() {
    const tLayout = useTranslations('layout');
    const tCharas = useTranslations('characters');

    const [isCharacterOpen, setIsCharacterOpen] = useState(false);

    return (
        <nav className="p-2 flex items-center justify-between bg-lightgray font-inknut font-light ">
            <Link href="/" className="flex items-center ml-5">
                <Image
                    src="/images/icons/site-logo.png"
                    alt="Website Logo > Home Link"
                    width={60}
                    height={65}
                    priority
                />
            </Link>

            <div className="flex items-center gap-10 uppercase tracking-[0.5rem] ">
                <Link href="/" className="hover:text-pink-400">
                    {tLayout("home-btn")}
                </Link>

                {/*Dropdown logic for character list*/}
                <div
                    className="relative"
                    onMouseEnter={() => setIsCharacterOpen(true)}
                    onMouseLeave={() => setIsCharacterOpen(false)}
                >
                    <Link href="/characters" className="hover:text-pink-400 flex items-center gap-1">
                        {tLayout("characters")}
                        <Image
                            src="/images/icons/dropdown-arrow.png"
                            alt="dropdown arrow"
                            width={12}
                            height={12}
                            className={`transform transition-transform duration-200 ${isCharacterOpen ? 'rotate-180' : ''}`}
                        >
                        </Image>
                    </Link>

                    {/*Dropdown menu*/}
                    {isCharacterOpen && (
                        <div className="absolute w-full top-full left-0 bg-lightgray  rounded-lg shadow-lg py-2 min-w-[150px] z-50 text-center uppercase tracking-widest">
                            <Link href="/characters/xavier" className="block hover:text-pink-400">
                                {tCharas("chNames.xavier")}
                            </Link>
                            <Link href="/characters/zayne" className="block hover:text-pink-400">
                                {tCharas("chNames.zayne")}
                            </Link>
                            <Link href="/characters/rafayel" className="block hover:text-pink-400">
                                {tCharas("chNames.rafayel")}
                            </Link>
                            <Link href="/characters/sylus" className="block hover:text-pink-400">
                                {tCharas("chNames.sylus")}
                            </Link>
                            <Link href="/characters/caleb" className="block hover:text-pink-400">
                                {tCharas("chNames.caleb")}
                            </Link>                                                        
                        </div>
                    )}
                </div>

                <LanguageSwitch /> {/*havent created it yet its a placeholder*/}
            </div>

            <SearchInput/>
        </nav>
    )
}