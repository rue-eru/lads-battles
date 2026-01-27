export const styles = {
    h1: `font-accent text-xl`,
    headerEN: ``,
    sectionH1: `font-accent text-xl uppercase`,
    pageStructure: `flex flex-col min-h-screen`,
    divider: `border-t border-text-primary w-full -mt-4`,
    pagelayout: `lg:w-[50%] sm:w-[90%] w-[95%] mx-auto flex-1 mb-20`,
    contentlayout: `flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-20 w-full text-justify`,
    
    tableRow: `hover:bg-pink-400 font-accent`,
    charaIconStyle: ` hover:border-pink-400 hover:border-3 rounded-full`,
    navDowndropLists: `absolute w-full top-full bg-lightgray rounded-lg shadow-lg z-50 text-center tracking-widest py-4`,
    dropdownBlockLI: `block hover:text-pink-400 uppercase text-nowrap`,
    contactIcons: `object-contain bg-aliceblue rounded-full outline-2 outline-black -outline-offset-1 shadow-md shadow-black/20 cursor-pointer`,
    errorBtns: `bg-lightgray flex flex-row justify-center items-center gap-2 p-3 border rounded-3xl cursor-pointer uppercase`,


    //styles for ProtocororeTypeTable
    thDiv: `flex justify-center items-center`,
    thImgSpanDiv: `inline-flex items-center text-center gap-3`,
    cardTypeImage: `object-contain w-6 h-6`,
    protocoreTypeImage: `object-contain w-15 h-15`,
    protCol: `flex gap-6 flex-col`,
    flatStatProt: `inline-flex gap-10 items-center`,
    flatStatStyle: `flex items-center gap-2 mb-2`,
    multipleStatProt: `flex-1 w-full inline-flex gap-10 items-center`,
    multipleStatStyle: `flex items-center gap-2 mb-2`,
    rowHover: `block hover:bg-pink-400`,
    colStyle: `space-y-6 flex-1 font-accent my-8`,
    ulStatsStyle: `space-y-1 list-none pl-0  overflow-hidden `,
    statHoverStyle: `hover:underline hover:dotted-yellow-100 text-left`,
    protoTypeTableH1: `font-accent`,

    //skills
    h1Skills: `font-accent text-xl mb-6`,
    skillsInfoDiv: `flex gap-3 font-accent text-wrap`,
    skillsPinkBubble: `rounded-2xl px-2 bg-pink-400`,
    skillsGrayubble: `rounded-2xl px-2 bg-lightgray`,
    imgSkillWidth: `w-[25%] sm:w-32 p-2 sm:p-6`,
    imgSkillCentered: `flex justify-center items-center`,
    skillDescriptionDiv:`sm:p-6 py-6`,
    skillInfoBubbleDiv: `flex flex-wrap items-center gap-3 mb-2 font-accent`,
    skillRoundImg: `object-contain sm:w-20 sm:h-20 w-15 h-15`,

    //gameplay
    figcaptionStyle: `text-sm text-right text-gray-400 italic text-wrap justify-end`,
    img_bg: ` bg-gray-700 rounded-sm p-1`,
    imgHeight: `w-full h-60 md:h-80 lg:h-100 relative`,
    imgFillContainer: `object-cover cursor-zoom-in w-full h-full`,

    //floatingbtns
    floatBtnStyle: `flex gap-2 items-center hover:border-pink-400 hover:text-pink-400 
                    bg-darkgray rounded-full h-8 w-8 px-2 border inset-0 z-50
                    lg:border-none`,
    floatBtnStyleLetters: `hover:border-pink-400 text-center
                    bg-darkgray rounded-full h-8 w-8 px-3 border inset-0 z-50
                    lg:border-none`,

} as const
