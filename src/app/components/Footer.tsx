"use client"

import {Link} from "@/i18n/navigation"
import { useTranslations } from "next-intl";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import HomeBtn from "./HomeBtn";

export default function Footer() {
    const t = useTranslations('layout');
    const {isJa, isEn} = useCurrentLanguage();

    return (
        <footer className={`flex flex-wrap items-center justify-between bg-lightgray font-accent font-light w-full border-t-2 border-darkgray sm:px-6 h-auto 
        ${isEn ? 'sm:font-normal font-light px-0.5 py-2' : 'p-1'}`}>

            <div className="flex flex-nowrap gap-2 sm:items-center sm:gap-10 uppercase lg:tracking-[0.5rem] w-[40%] sm:w-fit">
                    <HomeBtn />
                    <Link href="/contact" className="hover:text-pink-400 text-nowrap">
                        {t("contact")}
                    </Link>
            </div>

            <div className="sm:text-right text-left w-auto sm:ml-4">
                {isJa
                    ? <p>@2025 恋と深空バトル</p>
                    : <p>@2025 Love and Deepspace Battles</p>
                }
                <p>{t("unofficial")}</p>
            </div>

        </footer>
    )
}