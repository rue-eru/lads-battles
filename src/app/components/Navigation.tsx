'use client'

import Image from "next/image"
import {Link} from "@/i18n/navigation"
import LanguageSwitch from "./LanguageSwitch"
import SearchInput from "./SearchInput"
import { useTranslations } from "next-intl"
import { styles } from "../utils/styles"
import NavDropdown from "./NavDropdown"
import { useCurrentLanguage } from "../hooks/useCurrentLanguage"

export default function Navigation() {
    const tLayout = useTranslations('layout');
    const tCharas = useTranslations('characters');
    const {isRu} = useCurrentLanguage();

    return (
        <nav className="p-2  flex items-center justify-between bg-lightgray font-accent font-light ">
            <Link href="/" className="flex items-center ml-5">
                <Image
                    src="/images/icons/site-logo.png"
                    alt="Website Logo > Home Link"
                    width={60}
                    height={65}
                    priority
                />
            </Link>

            <div className="flex items-center gap-10 uppercase lg:tracking-[0.5rem]">
                <Link href="/" className="hover:text-pink-400">
                    {tLayout("home-btn")}
                </Link>

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

            <SearchInput/>
        </nav>
    )
}