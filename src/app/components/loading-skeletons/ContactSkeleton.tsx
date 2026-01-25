export default function ContactSkeleton () {

    const spaceFill = `h-4 w-500`

    return (
    <div className="relative overflow-hidden">
        <div className="space-y-6 p-6">

            {/* title*/}
            <div className="h-4 bg-gray-200 rounded w-50"></div>

            <div className={spaceFill}></div>

            {/*  text paragraph */}
            {[100, 100, 60, 85, 60].map((width, i) => (
              <div 
                key={i}
                className="h-4 bg-gray-200 rounded"
                style={{ width: `${width}%` }}
              />
            ))}

            <div className={spaceFill}></div>


            { /* contact links and images */}
            <div className="grid grid-cols-5 place-items-center justify-center ">
                <div className="col-start-3 sm:col-start-5 w-45">
                    <div className="h-40 w-full bg-gray-200 justify-end rounded"></div>
                </div>
            </div>

      </div>
      
    </div>
    )
}