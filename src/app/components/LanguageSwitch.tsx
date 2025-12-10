'use client'

export default function LanguageSwitch(){
    return (
        <div className="flex items-center gap-1 ">
            <select className="bg-lightgray hover:text-pink-400">
                <option>EN</option>
                <option>JP</option>
                <option>RU</option>

            </select>
        </div>
    )
}