export default function CompanionGuideSkeleton () {
    const spaceFill = `h-4 w-5`
    const rowStyle = `flex-1 flex flex-col gap-4`

    return (
        <div className="relative overflow-hidden">
            <div className="space-y-6 p-6">

                {/* title*/}
                <div className="h-8 bg-gray-200 rounded w-150"></div>

                <div className={spaceFill}></div>

                {/* banner*/}
                <div className="sm:h-40 h-30 bg-gray-200 rounded w-500"></div>

                {/* table simuator */}
                <div className="flex w-full h-80">
                    <div className={rowStyle}>
                        {[35, 30, 25, 45, 20, 22, 24].map((width, i) => (
                          <div
                            key={i}
                            className="h-10 bg-gray-200 rounded "
                            style={{ width: `${width}%` }}
                            >
                          </div>
                        ))}
                    </div>
                    <div className={rowStyle}>
                        {[26, 24, 18, 22, 55, 36, 20].map((width, i) => (
                          <div 
                            key={i}
                            className="h-10 bg-gray-200 rounded"
                            style={{ width: `${width}%` }}
                          />
                        ))}
                    </div>
                </div>

                <div className={spaceFill}></div>

                {/* section title*/}
                <div className="h-8 bg-gray-200 rounded w-100"></div>

                {/*  text paragraph */}
                {[100, 95, 80, 100, 100, 60, 90, 100, 76, 90, 100, 45, 85, 100, 92, 100, 98, 100, 55].map((width, i) => (
                  <div 
                    key={i}
                    className="h-4 bg-gray-200 rounded"
                    style={{ width: `${width}%` }}
                  />
                ))}


            </div>
        </div>
    )
}