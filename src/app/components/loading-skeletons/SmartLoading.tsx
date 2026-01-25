'use client'

import { usePathname } from "@/i18n/navigation"
import ContactSkeleton from "./ContactSkeleton";
import { styles } from "@/app/utils/styles";
import HomeSkeleton from "./HomeSkeleton";
import CharacterListSkeleton from "./CharacterListSkeleton";

// helps for checking, place in the page you work with 
//   await new Promise(resolve => setTimeout(resolve, 500000));

export default function SmartLoading() {

    const pathname = usePathname();

    // splits the url into segments and ignores the locale prefix
    const segments = pathname.split('/').filter(segment => 
        segment && segment !== 'ja' && 
        segment !== 'en' && 
        segment !== 'ru');

    const getSkeleton = ()=> {

        // eg: /ja/
        if (segments.length === 0) {
            return <HomeSkeleton />
        }

        // ja/characters
        if (segments.length === 1 && segments[0] === 'characters'){
            return <CharacterListSkeleton />
        }

        // ja/contact
        if (segments.length === 1 && segments[0] === 'contact'){
            return <ContactSkeleton />
        }

        // ja/characters/rafayel
        if (segments.length === 2 && segments[0] === 'characters'){

        }

        // ja/characters/rafayel/fresh_paint
        if (segments.length === 3 && segments[0] === 'characters'){

        }    
    
    }
    

    return(
        <div className={styles.pagelayout}>
            <div className={styles.contentlayout}>
                <div className="animate-pulse w-full overflow-hidden">
                    {getSkeleton()}
                </div>
            </div>
        </div>
    )
}