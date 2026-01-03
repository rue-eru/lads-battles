
import { ProtocoreTypesTableProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { getStellactrumColor } from "../../../../../../utils/game/stellactrum-utils";
import Image from "next/image";
import { styles } from "@/app/utils/styles";
import { TextRenderer } from "../glossary/TextRenderer";

export default function ProtocoreTypesTable({stellactrum, betaData, deltaData }: ProtocoreTypesTableProps) {
    const t = useTranslations('protocores');
    const displayColor = getStellactrumColor(stellactrum);

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
                        />
                        <span className="font-inknut">{t('ProtocoreType.Solar')}</span>
                    </div>
                </div>

                <div className={styles.protCol}>
                    {/*ALPHA*/}
                    <div className={styles.rowHover}>
                        <div className={styles.flatStatProt}>
                            <div className={styles.flatStatStyle}>
                                <Image 
                                    src={`/images/mats/protocores/${displayColor}/alpha.png`}
                                    alt="Alpha"
                                    width={50}
                                    height={50}
                                    className="object-cover"
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
                                    src={`/images/mats/protocores/${displayColor}/beta.png`}
                                    alt="Alpha"
                                    width={50}
                                    height={50}
                                    className="object-cover"
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
                        />
                        <span>{t('ProtocoreType.Lunar')}</span>
                    </div>
                </div>

                <div className={styles.protCol}>
                    {/*GAMMA*/}
                    <div className={styles.rowHover}>
                        <div className={styles.flatStatProt}>
                            <div className={styles.flatStatStyle}>
                                <Image 
                                    src={`/images/mats/protocores/${displayColor}/gamma.png`}
                                    alt="Gamma"
                                    width={50}
                                    height={50}
                                    className="object-cover"
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
                                    src={`/images/mats/protocores/${displayColor}/delta.png`}
                                    alt="Delta"
                                    width={50}
                                    height={50}
                                    className="object-cover"
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

{/* FIRST APPROACH FOR THAT COMPONENT WITH PURE <TABLE> and NO MAIN STAT LOGIC
            <table className="w-full min-w-full table-auto">

                first row: headers | Solar cards | Lunar Cards|
                <thead>
                    <tr className="text-center">
                        <th>
                            <div className={styles.th}>
                                <Image 
                                 src="/images/icons/solar_icon.webp"
                                 alt="Solar"
                                 width={30}
                                 height={30}
                                />
                                <span className="font-inknut">{t('Solar')}</span>
                            </div>
                        </th>

                        <th>
                            <div className={styles.th}>
                                <Image 
                                 src="/images/icons/lunar_icon.webp"
                                 alt="Lunar"
                                 width={30}
                                 height={30}
                                />
                                <span className="font-inknut">{t('Lunar')}</span>
                            </div>
                        </th>
                    </tr>
                </thead>

                 second row: protocore images | alpha | beta | delta | gamma |
                <tr>
                    <td className="">
                        alpha img
                        <div className={styles.th}>
                            <Image 
                                src={`/images/mats/protocores/${displayColor}/alpha.webp`}
                                alt="Alpha protocore"
                                width={50}
                                height={50}
                                className="object-cover"
                            />
                            <span>α</span>

                        </div>
                        beta img
                        <div>
                            <Image 
                                src={`/images/mats/protocores/${displayColor}/beta.webp`}
                                alt="Beta protocore"
                                width={50}
                                height={50}
                                className="object-cover"
                            />
                            <span>β</span>

                        </div>
                    </td>
                    <td>
                        *gamma img
                        <div>
                            <Image 
                                src={`/images/mats/protocores/${displayColor}/gamma.webp`}
                                alt="Gamma protocore"
                                width={50}
                                height={50}
                                className="object-cover"
                            />
                            <span>γ</span>
                        </div>

                        *delta img*
                        <div>
                            <Image 
                                src={`/images/mats/protocores/${displayColor}/delta.webp`}
                                alt="Delta protocore"
                                width={60}
                                height={50}
                                className="object-cover "
                            />
                            <span>δ</span>

                        </div>
                    </td>
                </tr>
            </table>
    */}