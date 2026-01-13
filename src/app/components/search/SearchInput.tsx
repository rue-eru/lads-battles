import { getSearchData } from "@/app/utils/search-data";
import Fuse from "fuse.js";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function SearchInput(){
    
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations();
    const locale = pathname.split('/')[1] || 'en';
    const searchItems = useMemo(() => getSearchData(), []);

    const fuse = useMemo(() => new Fuse(searchItems, {
        keys: [
            { name: 'names.en', weight: 0.4 }, // EN&JA = official => heigher weight
            { name: 'names.ja', weight: 0.4 },
            { name: 'names.ru', weight: 0.2 },
            { name: 'aliases', weight: 0.1 }, // for fallback

        ],
        threshold: 0.3, // 1 is super strict search, 0 is soft
        ignoreLocation: true,
        minMatchCharLength: 2,
    }), [searchItems]);

    const results = useMemo(() => {
        if(!query.trim()) return [];
        return fuse.search(query).map(result => result.item);
    }, [query, fuse]);

    //helper to get display name usuing IDs
    const getDisplayName = (item: typeof searchItems[0]) => {
        return `${t(item.characterTKey)}: ${t(item.companionTKey)}`;
    }

    const handleSelect = (item: typeof searchItems[0]) => {
        router.push(`/${locale}${item.route}`);
        setQuery('');
        setOpen(false);
    }
    
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="lg:w-100 md:w-50 border flex justify-end h-10">
            <div
                ref={containerRef}
                className="relative"
            >
                {!open ? (
                    <button
                        onClick={() => setOpen(true)}
                        onMouseEnter={() => setOpen(true)}
                        className="rounded-full bg-aliceblue h-10 w-10 flex justify-center items-center cursor-pointer"
                    >
                        <Image
                            src="/images/icons/search.png"
                            alt="search icon"
                            width={20}
                            height={20}
                            className="object-cover"
                        />
                    </button>
                ) : (
                        <div className={`
                            absolute right-2 top-0 z-50
                            transition-all duration-300 ease-out
                            origin-right
                            scale-x-100 opacuty-100
                        `}>

                            <input
                                autoFocus
                                type="text"
                                placeholder="Search companions..."
                                className="bg-aliceblue text-lightgray h-10 rounded-3xl"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            >
                            </input>
                            {query && results.length > 0 && (
                                <div 
                                    className=" bg-aliceblue text-darkgray mt-2 rounded-xl shadow-lg"
                                >
                                    {results.slice(0, 10).map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleSelect(item)}
                                            className="w-full text-left hover:bg-pink-400 hover:text-aliceblue hover:overflow-hidden"
                                        >
                                            <div>
                                                {getDisplayName(item)}
                                            </div>

                                        </button>
                                    ))}
                                </div>
                            )}
                        
                        </div>
                )}
            </div>
        </div>
    )
}