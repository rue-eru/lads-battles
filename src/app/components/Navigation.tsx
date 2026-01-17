'use client'

import Image from "next/image"
import {Link} from "@/i18n/navigation"
import LanguageSwitch from "./LanguageSwitch"
import SearchInput from "./search/SearchInput"
import { useTranslations } from "next-intl"
import { styles } from "../utils/styles"
import NavDropdown from "./NavDropdown"
import { useCurrentLanguage } from "../hooks/useCurrentLanguage"
import HomeBtn from "./HomeBtn"

export default function Navigation() {
    const tLayout = useTranslations('layout');
    const tCharas = useTranslations('characters');
    const { isJa } = useCurrentLanguage();

    return (
        <nav className="p-2  flex items-center justify-between bg-lightgray font-accent font-light">

            <Link href="/" className="hidden sm:block">
                <Image
                    src={isJa ? "/images/icons/ja-logo.png" : "/images/icons/main-logo.png"}
                    alt="Website Logo > Home Link"
                    width={70}
                    height={70}
                    priority
                />
            </Link>

            <div className="flex items-center gap-4 sm:gap-10 uppercase lg:tracking-[0.5rem]">
                <HomeBtn />

                {/*Dropdown logic for character list*/}
                <NavDropdown label={<Link href={"/characters"}>{tLayout('characters')}</Link>}>

                    {/*Dropdown menu*/}
                        <div className={styles.navDowndropLists}>
                            <Link href="/characters/xavier" className={styles.dropdownBlockLI}>
                                {tCharas("chNames.xavier")}
                            </Link>
                            <Link href="/characters/zayne" className={styles.dropdownBlockLI}>
                                {tCharas("chNames.zayne")}
                            </Link>
                            <Link href="/characters/rafayel" className={styles.dropdownBlockLI}>
                                {tCharas("chNames.rafayel")}
                            </Link>
                            <Link href="/characters/sylus" className={styles.dropdownBlockLI}>
                                {tCharas("chNames.sylus")}
                            </Link>
                            <Link href="/characters/caleb" className={styles.dropdownBlockLI}>
                                {tCharas("chNames.caleb")}
                            </Link>                                                        
                        </div>
                </NavDropdown>

                <LanguageSwitch />
            </div>

            {/*allows bigger screens avoid blocking dropdown by the expanded input*/}
            <div className="sm:w-[30%] lg:w-fit flex justify-end-safe">

                <SearchInput/>
            </div>

        </nav>
    )
}