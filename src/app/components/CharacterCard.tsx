import Image from "next/image";
import { GENERIC_BLUR } from "../lib/imageBlur";
import type { CharacterCardProps } from "../utils/interfaces-data";

export default function CharacterCard({
    titleId,
    imgRoot,
    className
}: CharacterCardProps) {

    return (
        <div className="flex flex-col items-center hover:scale-115 transition-transform hover:text-pink-400">
                <Image
                    src={`/images/${imgRoot}`}
                    alt={`imgRoot`} // you can also translate it in the file you pass it to
                    className={className}
                    width={100}
                    height={100}
                    placeholder="blur"
                    blurDataURL={GENERIC_BLUR}
                    sizes="(max-width: 640px) 120px,
                           (max-width: 768px) 160px,
                           200px"
                ></Image>
                <p className="text-center mt-2">{titleId}</p>
        </div>

    )
}
    