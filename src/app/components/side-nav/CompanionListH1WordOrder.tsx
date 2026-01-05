'use client'

import { useCurrentLanguage } from '@/app/hooks/useCurrentLanguage';
import { styles } from "@/app/utils/styles";
import { useTranslations } from 'next-intl';

export default function CompanionListH1WordOrder ({character}: {character: any}) {

    const {isRu, isJa, isEn}  = useCurrentLanguage();

    const tCharas =  useTranslations('characters.chNames');
    const tCompanions = useTranslations('characters.companions');


    let characterName;
    try {
        //as any for now
        characterName = tCharas(character as any);
    } catch (error) {
        //character as const returns an error
        characterName = String(character).charAt(0).toUpperCase()+ String(character).slice(1);
    }

    const possesive = characterName.endsWith("s") ? "'" : "'s";


    return(
        <>
            <h1 className={styles.h1}>
                {/*as any for now*/}
                {isEn 
                    ? <span>{tCharas(character as any)}{possesive} {tCompanions('companion-list-title')}</span>
                    : ''
                }
                {isRu
                    ? <span>{tCharas(character as any)}: {tCompanions('companion-list-title')}</span>
                    : ''
                }
                {isJa
                    ? <span>{tCharas(character as any)}の{tCompanions('companion-list-title')}</span>
                    : ''
                }
            </h1>
        </>
    )

}