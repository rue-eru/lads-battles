import { getSearchData } from "@/app/utils/search-data";
import Fuse from "fuse.js";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function SearchInput(){
    
    const [query, setQuery] = useState('');
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations();
    const locale = pathname.split('/')[1] || 'en';
    const searchItems = useMemo(() => getSearchData(), []);

    const fuse = useMemo(() => new Fuse(searchItems, {
        keys: ['searchText'],
        threshold: 0.3, // 1 is super strict search, 0 is soft
        minMatchCharLength: 2,
    }), [searchItems]);

    const results = useMemo(() => {
        if(!query.trim()) return [];
        return fuse.search(query).map(result => result.item);
    }, [query, fuse]);

    //helper to get display name usuing IDs
    const getDisplayName = (item: typeof searchItems[0]) => {
        try {
            const characterName = t(`${item.characterTKey as any}`)
            const companionName = t(`${item.companionTKey as any}`)
            return `${characterName}: ${companionName}`
        } catch {
            return `${item.characterId}: ${item.companionId}`;
        }
    }

    const handleSelect = (item: typeof searchItems[0]) => {
        router.push(`/${locale}${item.route}`);
        setQuery('');
        setExpanded(false);
    }
    


    return (
        <div className="lg:w-100 md:w-50 border flex justify-end h-10">
            {!expanded ? (
            <div
                onMouseOver={ () => setExpanded(true)}
                onClick={() => setExpanded(true)}
                className="rounded-full bg-aliceblue h-10 w-10 flex justify-center items-center cursor-pointer transition-all duration-1000"
            >
                <Image
                    src="/images/icons/search.png"
                    alt="back arrow"
                    width={20}
                    height={20}
                    className="object-cover"
                />
            </div>
            ) : (
                    <div
                        onMouseLeave={() => setExpanded(false)}
                    >
                        <input
                            type="text"
                            placeholder="Search companions..."
                            className="md:absolute right-2 bg-aliceblue text-lightgray h-10 transition-all duration-1000
                                rounded-3xl
                                "
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        >
                        </input>
                        {query && results.length > 0 && (
                            <div 
                                className=" bg-aliceblue text-darkgray"
                            >
                                {results.slice(0, 5).map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleSelect(item)}
                                        className="w-full text-left hover:bg-pink-400 hover:text-aliceblue"
                                    >
                                        <div>
                                            {getDisplayName(item)}
                                        </div>
                                        <div>
                                            {item.characterId} • {item.companionId}
                                        </div>

                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
            )}



        </div>
    )
}