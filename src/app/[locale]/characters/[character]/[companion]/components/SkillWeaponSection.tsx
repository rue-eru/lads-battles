import { CharaDataProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { CharacterId, charactersData } from "@/app/utils/character-data-loader";
import { styles } from "@/app/utils/styles";

export default function SkillWeaponSection ({character, companion}: CharaDataProps) {
    const charaData = charactersData[character as CharacterId];
    const companionData = charaData.companions.find(comp => comp.id === companion);

    const t = useTranslations('skillWeaponSection');

    return (
        <div className={styles.contentlayout}>
            <h1 className={styles.sectionH1}>{t('header')}</h1>
            <hr className={styles.divider}></hr>
        </div>
    )
}