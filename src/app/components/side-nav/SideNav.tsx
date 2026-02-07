import BackBtn from "./BackBtn";
import UpBtn from "./UpBtn";
import SectionNav from "./SectionNav";

export default function SideNav () {

    return(
        <div className="font-accent z-50 ">

                <div className="fixed lg:left-10 top-20 left-2">
                    <BackBtn />
                </div>

                <div className="fixed lg:top-31 lg:left-17 top-20 left-12">
                    <SectionNav />
                </div>

            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:left-10  lg:bottom-30 lg:transform-none lg:translate-none">
                <UpBtn />
            </div>

        </div>
    )
}