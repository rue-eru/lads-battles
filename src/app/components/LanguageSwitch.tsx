'use client'

import { usePathname, useRouter } from "next/navigation";
import NavDropdown from "./NavDropdown";
import { styles } from "../utils/styles";

export default function LanguageSwitch(){

    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'en', name: 'en'},
        { code: 'ru', name: 'рус' },
        { code: 'ja', name: '日本語'}
    ];

    const currentLang = pathname.split('/')[1] || 'en';

    const switchLang = (lang: string) => {
        // remove locale from pathname
        const segments = pathname.split('/');
        const currentPath = segments.slice(2).join('/') || '';
        router.push(`/${lang}/${currentPath}`);
    }

    return (
        <NavDropdown label={currentLang}>

            <div className={`${styles.navDowndropLists} border min-w-15`}>

                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => switchLang(lang.code)}
                        className="hover:text-pink-400 uppercase text-nowrap"
                    >
                        {lang.name}
                    </button>
                ))}
            </div>
        </NavDropdown>

    )
}