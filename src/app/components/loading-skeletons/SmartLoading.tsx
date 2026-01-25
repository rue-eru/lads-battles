'use client'

import { usePathname } from "@/i18n/navigation"
import ContactSkeleton from "./ContactSkeleton";
import { styles } from "@/app/utils/styles";
import HomeSkeleton from "./HomeSkeleton";
import CharactersListSkeleton from "./CharactersListSkeleton";
import CharaCompanionListSkeleton from "./CharaCompanionListSkeleton";
import { charactersData, type CharacterId} from "@/app/utils/loaders/character-data-loader"
import CompanionGuideSkeleton from "./CompanionGuideSkeleton";


// helps for checking, place in the page you work with 
// place it right at the top of the async server function!
// await new Promise(resolve => setTimeout(resolve, 500000));

export default function SmartLoading() {
    const pathname = usePathname();

    // splits the url into segments and ignores the locale prefix
    const segments = pathname.split('/').filter(segment => 
        segment && segment !== 'ja' && 
        segment !== 'en' && 
        segment !== 'ru'
    );

    let characterData = null;
    let characterName: CharacterId | null = null;

    if (segments.length >=2 && segments[0] === 'characters') {
        characterName = segments[1] as CharacterId;

        if (characterName && charactersData[characterName]) {
            characterData = charactersData[characterName];
        } else {
            //fallback
            characterData = Object.values(charactersData)[0];
        }
    }

    
    const getSkeleton = ()=> {

        // eg: /ja/
        if (segments.length === 0) {
            return <HomeSkeleton />
        }

        // ja/characters
        if (segments.length === 1 && segments[0] === 'characters'){
            return <CharactersListSkeleton />
        }

        // ja/contact
        if (segments.length === 1 && segments[0] === 'contact'){
            return <ContactSkeleton />
        }

        // ja/characters/rafayel
        if (segments.length === 2 && segments[0] === 'characters'){
            return <CharaCompanionListSkeleton characterData={characterData} />
        }

        // ja/characters/rafayel/fresh_paint
        if (segments.length === 3 && segments[0] === 'characters'){
            return <CompanionGuideSkeleton />
        }

        // as fallback
        return <HomeSkeleton />
    
    }
    

    return(
        <div className={`${styles.pagelayout} cursor-wait`}>
            <div className={styles.contentlayout}>
                <div className="animate-pulse w-full overflow-hidden">
                    {getSkeleton()}
                </div>
            </div>
        </div>
    )
}