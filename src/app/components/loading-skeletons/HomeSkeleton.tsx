export default function HomeSkeleton () {
    const spaceFill = `h-4 w-500`

    return (
      <div className="relative overflow-hidden">
          <div className="space-y-6 p-6">

              {/* title*/}
              <div className="h-4 bg-gray-200 rounded w-150"></div>

              <div className={spaceFill}></div>

              <div className="h-4 bg-gray-200 rounded w-200"></div>

              {/*  text paragraph */}
              {[100, 100, 90, 100, 100, 40, 100, 100, 76, 90, 100, 80, 100, 95, 100, 30, 100, 100, 65, 100, 100, 45, 100,100, 30, 100, 100, 75, 100, 100, 100, 20, 100, 100, 30, 100, 100, 45].map((width, i) => (
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