import { useTranslations } from 'next-intl';
import CharacterList from "@/app/components/CharacterList";
import { styles } from "@/app/utils/styles";
import CharaListNB from '@/app/components/CharaListNB';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations('layout.metadata.charactersListPage');
    const title = t('title');
    const description = t('description');

    return{
        title,
        description
    }
}

export default function CharactersPage () {
    const t = useTranslations('layout');
    
    return (
        <div className={styles.pagelayout}>
            <div className={styles.contentlayout}>
                <h1 className={styles.h1}>{t("character-list")}</h1>
                <hr className={styles.divider}></hr>
        
                <div className={`${styles.contentlayout}`}>
                    <div className='-mt-20 mb-4 w-full flex justify-center items-center'>
                        <CharacterList className="
                            flex flex-wrap justify-evenly items-center gap-4 p-4
                            sm:justify-center sm:grid sm:grid-cols-3 sm:gap-4 
                        " />
                    </div>
                    <hr className={styles.divider}></hr>
                    <CharaListNB />
                </div>
            </div>
        </div>
    )
}