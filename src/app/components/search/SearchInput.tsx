import Image from "next/image";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResult";

export default function SearchInput(){
    
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (e: any) => setQuery(e.target.value);

    useEffect(() => {
        if (!query) {
            setSearchResults([])
            return
        }
    }, [query])

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
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                            maxLength={64}
                            value={query}
                            onChange={handleChange}
                        >
                        </input>
                        {query &&(
                            <div>
                                <SearchResults searchResults={searchResults} />
                            </div>
                        )}
                    </div>
            )}



        </div>
    )
}