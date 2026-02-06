import { ProtocoreTypesTableProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { styles } from "@/app/utils/styles";
import { TextRenderer } from "../glossary/TextRenderer";

export default function ProtocoreTypesTable({stellactrum, betaData, deltaData }: ProtocoreTypesTableProps) {
    const t = useTranslations('protocores');

    betaData = [
        'hp_bonus', 'atk_bonus' , 'def_bonus' , 'expedited_energy_boost' , 'oath_recovery_boost' , 'oath_strength'
    ];

    deltaData = [
        'hp_bonus' , 'atk_bonus' , 'def_bonus' , 'crit_rate' , 'crit_dmg' , 'dmg_boost_to_weakened'
    ];

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 min-w-full">
            {/*for UI puproses switched from <table> to <div> for better responsiveness to create a presentational layout*/}

            {/* Solar Protocores*/}
            <div className={styles.colStyle}>
                <div className={styles.thDiv}>
                    <div className={styles.thImgSpanDiv}>
                        <Image 
                            src="/images/icons/solar_icon.webp"
                            alt="Solar"
                            width={24}
                            height={24}
                            className={styles.cardTypeImage}
                        />
                        <span className={styles.protoTypeTableH1}>{t('ProtocoreType.Solar')}</span>
                    </div>
                </div>

                <div className={styles.protCol}>
                    {/*ALPHA*/}
                    <div className={styles.rowHover}>
                        <div className={styles.flatStatProt}>
                            <div className={styles.flatStatStyle}>
                                <Image 
                                    src={`/images/mats/protocores/${stellactrum}/alpha.png`}
                                    alt="Alpha"
                                    width={50}
                                    height={50}
                                    className={styles.protocoreTypeImage}
                                />
                                <span>α</span>
                            </div>
                            <div className={styles.statHoverStyle}>
                                <TextRenderer>{t('protocoreStats.hp')}</TextRenderer>
                            </div>
                        </div>
                    </div>

                    {/*BETA*/}
                    <div className={styles.rowHover}>
                        <div className={styles.multipleStatProt}>
                            <div className={styles.multipleStatStyle}>
                                <Image 
                                    src={`/images/mats/protocores/${stellactrum}/beta.png`}
                                    alt="Beta"
                                    width={50}
                                    height={50}
                                    className={styles.protocoreTypeImage}
                                />
                                <span>β</span>
                            </div>
                            <ul className={styles.ulStatsStyle}>
                                {betaData?.map((stat, index) => (
                                    <li
                                        key={index}
                                        className={styles.statHoverStyle}
                                    >
                                        <TextRenderer>
                                            {t(`protocoreStats.${stat}`)}
                                        </TextRenderer>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            {/* LUNAR Protocores*/}
            <div className={styles.colStyle}>
                <div className={styles.thDiv}>
                    <div className={styles.thImgSpanDiv}>
                        <Image 
                            src="/images/icons/lunar_icon.webp"
                            alt="Lunar"
                            width={24}
                            height={24}
                            className={styles.cardTypeImage}                        
                            />
                        <span className={styles.protoTypeTableH1}>{t('ProtocoreType.Lunar')}</span>
                    </div>
                </div>

                <div className={styles.protCol}>
                    {/*GAMMA*/}
                    <div className={styles.rowHover}>
                        <div className={styles.flatStatProt}>
                            <div className={styles.flatStatStyle}>
                                <Image 
                                    src={`/images/mats/protocores/${stellactrum}/gamma.png`}
                                    alt="Gamma"
                                    width={50}
                                    height={50}
                                    className={styles.protocoreTypeImage}
                                />
                                <span>γ</span>
                            </div>
                            <div className={styles.statHoverStyle}> 
                                <TextRenderer>{t('protocoreStats.atk')}</TextRenderer>
                            </div>
                        </div>
                    </div>
                    {/*            <div className={styles.rowHover}>
                        <div className={styles.multipleStatProt}>
                            <div className={styles.multipleStatStyle}>*/}

                    {/*DELTA*/}
                    <div className={styles.rowHover}>
                        <div className={styles.multipleStatProt}>
                            <div className={styles.multipleStatStyle}>
                                <Image 
                                    src={`/images/mats/protocores/${stellactrum}/delta.png`}
                                    alt="Delta"
                                    width={50}
                                    height={50}
                                    className={styles.protocoreTypeImage}
                                />
                                <span>δ</span>
                            </div>
                            <ul className={styles.ulStatsStyle}>
                                {deltaData?.map((stat, index) => (
                                    <li
                                        key={index}
                                        className={styles.statHoverStyle}
                                    >
                                        <TextRenderer>
                                            {t(`protocoreStats.${stat}`)}
                                        </TextRenderer>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
