export const styles = {
    h1: `font-inknut text-xl`,
    headerEN: `text-[16px]`,
    sectionH1: `font-inknut text-xl uppercase`,


    divider: `border-t border-text-primary w-full -mt-4`,
    pagelayout: `lg:w-[50%] sm:w-[90%] mx-auto flex-1 mb-20`,
    contentlayout: `flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-20 w-full text-justify`,
    tableRow: `hover:bg-pink-400 font-inknut`,
    charaIconStyle: ` hover:border-pink-400 hover:border-3 rounded-full`,
    navDowndropLists: `absolute w-full top-full bg-lightgray rounded-lg shadow-lg z-50 text-center tracking-widest py-4`,
    dropdownBlockLI: `block hover:text-pink-400 uppercase text-nowrap`,


    //styles for ProtocororeTypeTable
    thDiv: `flex justify-center items-center`,
    thImgSpanDiv: `inline-flex items-center text-center gap-3`,
    protCol: `flex gap-6 flex-col`,
    flatStatProt: `inline-flex gap-10 items-center`,
    flatStatStyle: `flex items-center gap-2 mb-2`,
    multipleStatProt: `flex-1 w-full inline-flex gap-10 items-center`,
    multipleStatStyle: `flex items-center gap-2 mb-2`,
    rowHover: `block hover:bg-pink-400`,
    colStyle: `space-y-6 flex-1 font-inknut my-8`,
    ulStatsStyle: `space-y-1 list-none pl-0  overflow-hidden `,
    statHoverStyle: `hover:underline hover:dotted-yellow-100 text-left`,

    //skills
    h1Skills: `font-inknut text-xl mb-6`,
    skillsInfoDiv: `flex gap-3 font-inknut text-wrap`,
    skillsPinkBubble: `rounded-2xl px-2 bg-pink-400`,
    skillsGrayubble: `rounded-2xl px-2 bg-lightgray`,
    imgSkillWidth: `w-32 p-6`,
    skillInfoBubbleDiv: `flex flex-wrap items-center gap-3 mb-2 font-inknut`,

    //gameplay
    figcaptionStyle: `text-sm text-right text-gray-400 italic text-wrap justify-end`,
    img_bg: ` bg-gray-700 lg:p-2 sm:p-1 rounded-sm`,
    imgHeightSoloOrSoloCapture: `w-full sm:h-60 md:h-80 lg:h-100 relative`,

    //floatingbtns
    floatBtnStyle: `flex gap-2 items-center hover:text-pink-400 
                    sm:bg-darkgray sm:rounded-full sm:h-8 sm:w-8 sm:px-3 sm:border inset-0 z-50
                    lg:border-none`





} as const