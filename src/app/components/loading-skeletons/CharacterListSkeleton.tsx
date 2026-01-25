export default function CharacterListSkeleton () {
        const spaceFill = `h-8 w-500`

    return (
        <div className="relative" >
            <div className="space-y-6 p-6">

                {/* title*/}
                <div className="h-4 bg-gray-200 rounded w-60"></div>

                <div className={spaceFill}></div>

                {/*  icon list */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 w-full">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex flex-col items-center flex-wrap w-fit">
                            <div className="rounded-full sm:h-23 sm:w-23 h-20 w-20 bg-gray-200 overflow-visible!"></div>
                            <div className="h-4 w-10"></div>
                            <div className="mx-auto h-4 bg-gray-200 w-15 rounded"></div>
                        </div>
                    ))}
                  
                </div>
                

                <div className={spaceFill}></div>
                {/* NB*/}
                <div className="h-4 bg-gray-200 rounded w-150"></div>

            </div>
        </div>
    )
}