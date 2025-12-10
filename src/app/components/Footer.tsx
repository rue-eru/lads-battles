"use client"

import {Link} from "@/i18n/navigation"
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('nav-foot');

    return (
        <footer className="flex items-center justify-between bg-lightgray font-inknut font-light  w-full  border-t-2 border-darkgray p-6">
            <div className="flex items-center gap-10 uppercase tracking-[0.5rem]">
                    <Link href="/" className="hover:text-pink-400">
                        {t("home-btn")}
                    </Link>
                    <Link href="/contact" className="hover:text-pink-400">
                        {t("contact")}
                    </Link>
            </div>
            <div className="text-right w-auto">
                <p>@2025 Love and Deepspace Battles</p>
                <p>{t("unofficial")}</p>
            </div>
        </footer>
    )
}