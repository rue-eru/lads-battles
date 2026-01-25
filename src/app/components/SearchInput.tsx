import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";
import { getSearchData } from "@/app/utils/search-data";
import Fuse from "fuse.js";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function SearchInput(){
    
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations();
    const locale = pathname.split('/')[1] || 'en';
    const searchItems = useMemo(() => getSearchData(), []);
    const {isEn} = useCurrentLanguage();

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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!results.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex( i => i < results.length - 1 ? i + 1 : 0)
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex( i => i > 0 ? i - 1 : results.length - 1)
        }

        if (e.key === "Enter" && activeIndex >= 0) {
            handleSelect(results[activeIndex])
        }
    }

    useEffect(() => {
        setActiveIndex(-1)
    }, [query]);

    return (
        <div className="w-10 flex justify-end h-10">
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
                            width={25}
                            height={25}
                            className="object-cover"
                        />
                    </button>
                ) : (
                        <div className={`
                            absolute right-2 top-0 z-50
                            transition-all duration-200 ease-out
                            origin-right
                            ${open 
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-2 pointer-events-none'
                            }
                        `}>

                            <input
                                autoFocus
                                type="text"
                                placeholder={t('layout.search-placeholder')}
                                className={`
                                    bg-aliceblue text-lightgray 
                                    h-10 px-4 
                                    rounded-3xl 
                                    focus:outline-none 
                                    w-[clamp(14rem,30vw,22rem)] 
                                    shadow-lg shadow-black/10
                                    leading-none
                                    text-base
                                    caret-lightgray
                                    ${isEn ? 'main-font font-medium tracking-widest' : 'font-accent'}
                                    `}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                            >
                            </input>
                            {query && results.length > 0 && (
                                <div 
                                    className=" bg-aliceblue text-darkgray rounded-3xl shadow-lg mt-0.5 overflow-hidden"
                                >
                                    {results.slice(0, 10).map((item, index) => (
                                       <button
                                        key={item.id}
                                        onClick={() => handleSelect(item)}
                                        className={`
                                                w-full text-left px-4 py-2 font-accent
                                                transition-colors duration-150
                                                focus:outline-none focus-visible:outline-none
                                                ${index === activeIndex
                                                    ? 'bg-pink-400 text-aliceblue'
                                                    : 'text-lightgray hover:bg-pink-400 hover:text-aliceblue'
                                                }
                                            `}
                                       >
                                            {getDisplayName(item)}
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