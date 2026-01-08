'use client'
import { useCurrentLanguage } from '@/app/hooks/useCurrentLanguage';
import { useTranslations } from 'next-intl';

export default function CharaListNB() {

    const tLayout = useTranslations('layout');
    const {isJa} = useCurrentLanguage();

    return(
        <>
            <p className='-mt-4'>{isJa ? "※ " : "* "}{tLayout("NB")}</p>

        </>
    )
}