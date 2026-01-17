import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function HomeBtn () {
    const tLayout = useTranslations('layout');
    
    return(
        <>
            <Link href="/" className="cursor-pointer">
                <p className="hover:text-pink-400 hidden sm:block">{tLayout("home-btn")}</p>
                <Image
                    src="/images/icons/home.png"
                    alt="Home Logo > Home Link"
                    width={17}
                    height={17}
                    priority
                    className="sm:hidden"
                />
            </Link>
        </>
    )
}