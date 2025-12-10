export const styles = {
    h1: `font-inknut text-xl`,
    sectionH1: `font-inknut text-xl uppercase`,


    divider: `border-t border-text-primary w-full -mt-4`,
    pagelayout: `w-[50%] mx-auto flex-1 mb-20`,
    contentlayout: `flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-20 w-full text-justify`,
    tableRow: `hover:bg-pink-400 font-inknut`,
    charaIconStyle: ` hover:border-pink-400 hover:border-3 rounded-full`,

    //styles for ProtocororeTypeTable
    thDiv: `flex justify-center items-center`,
    thImgSpanDiv: `inline-flex items-center text-center gap-3`,
    protCol: `flex gap-6 flex-col`,
    flatStatProt: `inline-flex gap-10 items-center`,
    flatStatStyle: `flex items-center gap-2 mb-2`,
    multipleStatProt: `flex-1 w-full inline-flex gap-10 items-center`,
    multipleStatStyle: `flex items-center gap-2 mb-2`,
    protRowHover: `block hover:bg-pink-400`,
    colStyle: `space-y-6 flex-1 font-inknut`,
    ulStatsStyle: `space-y-1 list-none pl-0`


} as const