'use client'

import { usePathname } from "next/navigation"

export function useCurrentLanguage () {
    const pathname = usePathname();
    const lang = pathname.split('/')[1];

    return {
        lang: lang || 'en',
        isRu: lang === 'ru',
        isJa: lang === 'ja',
        isEn: lang === 'en' || !lang,
    }
}