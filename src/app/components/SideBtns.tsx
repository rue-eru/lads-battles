'use client'

import Image from "next/image"


export default function SideBtns () {

    return(
        <div className="fixed left-10 top-20">
            <button
                onClick={() => history.back()}
            >
                <div className=" flex gap-2 items-center">
                    <Image
                         src="/images/icons/back-arrow.png"
                         alt="back arrow"
                         width={10}
                         height={10}
                         className="object-cover"
                     />
                    <span>Back</span>
                </div>
            </button>

            {

            }


            <div className="hidden">
            <button
                onScroll={() => 
                scrollTo
                
            }
            >
                Up
            </button>
            </div>

        </div>
    )
}