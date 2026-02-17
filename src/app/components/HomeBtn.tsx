import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";

export default function HomeBtn () {
    const tLayout = useTranslations('layout');
    const { lang } = useCurrentLanguage();
    
    return(
        <>
            <Link href={`/${lang}`} className="cursor-pointer">
                <p className="hover:text-pink-400 hidden sm:block">{tLayout("home-btn")}</p>
                <Image
                    src="/images/icons/home.png"
                    alt="Home Logo > Home Link"
                    width={17}
                    height={17}
                    className="sm:hidden"
                />
            </Link>
        </>
    )
}