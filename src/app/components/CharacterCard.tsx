import Image from "next/image";
import { GENERIC_BLUR } from "../lib/imageBlur";
import type { CharacterCardProps } from "../utils/interfaces-data";

export default function CharacterCard({
    titleId,
    imageSize,
    imgRoot,
    className
}: CharacterCardProps) {

    return (
        <div className="flex flex-col items-center  hover:scale-115 transition-transform hover:text-pink-400">
                    <Image
                        src={`/images/${imgRoot}`}
                        alt={`imgRoot`} // you can also translate it in the file you pass it to
                        width={imageSize}
                        height={imageSize}
                        className={className}
                        unoptimized
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={GENERIC_BLUR}
                    />
                <p className="text-center mt-2">{titleId}</p>
        </div>

    )
}
    