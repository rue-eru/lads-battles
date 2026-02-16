import { useTranslations } from 'next-intl';
import CharacterList from "@/app/components/CharacterList";
import { styles } from "@/app/utils/styles";
import CharaListNB from '@/app/components/CharaListNB';

export default function CharactersPage () {
    const t = useTranslations('layout');
    
    return (
        <div className={styles.pagelayout}>
            <div className={styles.contentlayout}>
                <h1 className={styles.h1}>{t("character-list")}</h1>
                <hr className={styles.divider}></hr>
        
                <div className={styles.contentlayout}>
                    <div className='-mt-20 mb-4 w-full flex justify-center items-center'>
                        <CharacterList />
                    </div>
                    <hr className={styles.divider}></hr>
                    <CharaListNB />
                </div>
            </div>
        </div>
    )
}