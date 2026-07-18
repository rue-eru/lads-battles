import type { RandomKittyGeneratorProps } from "@/app/utils/interfaces-data";
import Image from "next/image";

export default function RandomKittyGenerator({kittyChara, className}: RandomKittyGeneratorProps){

    return(
        <>
            {/* will get back when valko gets his own official kitty animations 
            dont forget to fix back getKittyName function in the ErrorPage.tsx too later*/}
            
            {kittyChara === "valko" ? null : (
                <Image
                    src={`/images/others/${kittyChara}.webp`}
                    alt={`${kittyChara} kitty gif`}
                    width={150}
                    height={150}
                    className={`object-cover ${className}`}
                    priority
                /> 
            )}
        </>
    )
}