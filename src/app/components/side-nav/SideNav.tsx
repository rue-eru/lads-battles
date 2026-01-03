'use client'

import BackBtn from "./BackBtn";
import UpBtn from "./UpBtn";
import SectionNav from "./SectionNav";


export default function SideNav () {

    return(
        <div className=" font-inknut z-50">
            <div className="fixed lg:left-10 top-20 sm:left-2 ">
            <BackBtn />
            <SectionNav />
            </div>

            <div className="fixed sm:bottom-4 sm:left-1/2 lg:bottom-auto lg:left-10 lg:top-70">
                <UpBtn />
            </div>

        </div>
    )
}