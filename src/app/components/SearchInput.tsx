'use client'

import { useCurrentLanguage } from "@/app/hooks/useCurrentLanguage";
import { getSearchData } from "@/app/utils/search-data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function SearchInput(){
    
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isSearchLoaded, setIsSearchLoaded] = useState(false);
    const [fuse, setFuse] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations();
    const locale = pathname.split('/')[1] || 'en';
    const {isEn} = useCurrentLanguage();

    //lazy load! loads only when the search is opened!
    const loadSearch = async () => {
        if (isSearchLoaded) return; 
        setIsLoading(true);

        try {
            //dynamically import
            const FuseModule = await import('fuse.js');
            const Fuse = FuseModule.default;

            const data = getSearchData();

            const fuseInstance = new Fuse(data, {
                keys: [
                    { name: 'names.en', weight: 0.4 }, // EN&JA = official => heigher weight
                    { name: 'names.ja', weight: 0.4 },
                    { name: 'names.ru', weight: 0.2 },
                    { name: 'aliases', weight: 0.1 }, // for fallback
                
                ],
                threshold: 0.3, // 1 is super strict search, 0 is soft
                ignoreLocation: true,
                minMatchCharLength: 2,
            });

            setFuse(fuseInstance);
            setIsSearchLoaded(true);
        } catch (error) {
            console.error("Failed to load search:", error);
        } finally {
            setIsLoading(false);
        };
    };

    const handleOpen = async () => {
        setOpen(true);
        await loadSearch();
    }

    const handleMouseEnter = () => {
        // starts preload on hover
        if (!isSearchLoaded && !isLoading) {
            loadSearch();
        }
    }

    const results = useMemo(() => {
        if(!query.trim() || !fuse) return [];
        return fuse.search(query).map((result: any) => result.item);
    }, [query, fuse]);

    //helper to get display name using IDs
    const getDisplayName = (item: any) => {
        return `${t(item.characterTKey)}: ${t(item.companionTKey)}`;
    }

    const handleSelect = (item: any) => {
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
                        onClick={handleOpen}
                        onMouseEnter={handleMouseEnter}
                        className="rounded-full bg-aliceblue h-10 w-10 flex justify-center items-center cursor-pointer"
                    >
                        <Image
                            src="/images/icons/search.png"
                            alt="search icon"
                            width={25}
                            height={25}
                            className="object-cover"
                            unoptimized
                            priority
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
                            />

                            {isLoading && (
                                <div className="bg-aliceblue text-darkgray rounded-3xl shadow-lg mt-0.5 p-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-pink-400 border-t-transparent"></div>
                                        <span className="text-sm animate-pulse">...</span>
                                    </div>
                                </div>
                            )}

                            {!isLoading && query && results.length > 0 && (
                                <div 
                                    className=" bg-aliceblue text-darkgray rounded-3xl shadow-lg mt-0.5 overflow-hidden"
                                >
                                    {results.slice(0, 10).map((item: any, index: any) => (
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

                            {!isLoading && query && results.length === 0 && isSearchLoaded && (
                                <div className="bg-aliceblue text-darkgray rounded-3xl shadow-lg mt-0.5 p-4">
                                    <span className="text-sm">{t('layout.no-results')}</span>
                                </div>
                            )}
                        
                        </div>
                )}
            </div>
        </div>
    )
}