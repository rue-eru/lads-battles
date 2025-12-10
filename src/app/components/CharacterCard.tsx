import Image from "next/image";

interface CharacterCardProps {
    titleId: string;
    imageSize?: number;
    imgRoot?: string;
    className?: string;
}

export default function CharacterCard({
    titleId,
    imageSize,
    imgRoot,
    className
}: CharacterCardProps) {

    return (
        <div className="block hover:scale-115 transition-transform hover:text-pink-400 ">
                <Image
                    src={`/images/${imgRoot}`}
                    alt={`imgRoot`} // you can also translate it in the file you pass it to
                    width={imageSize}
                    height={imageSize}
                    className={className}
                ></Image>
                <span className="block">{titleId}</span>
        </div>

    )
}
    