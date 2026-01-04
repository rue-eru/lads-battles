'use client'

import BackBtn from "./BackBtn";
import UpBtn from "./UpBtn";
import SectionNav from "./SectionNav";


export default function SideNav () {

    return(
        <div className=" font-inknut z-50">

                <div className="fixed lg:left-10 top-20 left-2">
                    <BackBtn />
                </div>

                <div className="fixed lg:top-31 lg:left-17 top-20 left-12">
                    <SectionNav />
                </div>

            <div className="fixed bottom-4 left-1/2 lg:bottom-auto lg:left-10 lg:top-70">
                <UpBtn />
            </div>

        </div>
    )
}