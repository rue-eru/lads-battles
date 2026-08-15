'use client'
import { useCurrentLanguage } from '@/app/hooks/useCurrentLanguage';
import { useTranslations } from 'next-intl';
import GuideProgressData from './GuideProgressData';

export default function CharaListNB() {

    const tLayout = useTranslations('layout');
    const {isJa} = useCurrentLanguage();

    return(
        <div
            className='w-full'
        >
            <p className='-mt-4 whitespace-pre-wrap'>{isJa ? "※ " : "* "}{tLayout("NB")}</p>

            <details className='mt-4'>
                <summary 
                    className='font-accent hover:bg-pink-400'
                >
                    {tLayout('guide-progress-section.summary')}
                </summary>

                <GuideProgressData />
            </details>

        </div>
    )
}