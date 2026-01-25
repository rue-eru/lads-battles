
export default function CharaCompanionListSkeleton({characterData}: {characterData: any}) {
    const companions = characterData?.companions || []
    const spaceFill = `h-8 w-500`

    return (
        <div className="relative" >
            <div className="space-y-6 p-6">

                {/* title*/}
                <div className="h-4 bg-gray-200 rounded w-60"></div>

                <div className={spaceFill}></div>

                {/*  icon list */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-2 w-full">
                    {companions.map((companion: any) => (
                        <div key={companion.id} className="flex flex-col items-center flex-wrap w-fit mb-4">
                            <div className="rounded-full sm:h-40 sm:w-40 h-25 w-25 bg-gray-200 overflow-visible!"></div>
                            <div className="h-4 w-25"></div>
                            <div className="mx-auto h-4 bg-gray-200 w-25 sm:w-35 rounded"></div>
                        </div>
                    ))}
                  
                </div>
                

            </div>
        </div>
    )
}