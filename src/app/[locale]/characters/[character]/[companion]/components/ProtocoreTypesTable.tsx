'use client'

import { ProtocoreTypesTableProps } from "@/app/utils/interfaces-data";
import { useTranslations } from "next-intl";
import { getStellactrumColor } from "../data/stellactrum-utils";
import Image from "next/image";
import { styles } from "@/app/utils/styles";

export default function ProtocoreTypesTable({stellactrum, companionId}: ProtocoreTypesTableProps) {
    const t = useTranslations('protocoreSection');
    const displayColor = getStellactrumColor(stellactrum);

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
                    <div className={styles.protRowHover}>
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
                            <div>{t('protocoreStats.hp')}</div>
                        </div>
                    </div>

                    {/*BETA*/}
                    <div className={styles.protRowHover}>
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
                                <li>{t('protocoreStats.hp_bonus')}</li>
                                <li>{t('protocoreStats.atk_bonus')}</li>
                                <li>{t('protocoreStats.def_bonus')}</li>
                                <li>{t('protocoreStats.expedited_energy_boost')}</li>
                                <li>{t('protocoreStats.oath_recovery_boost')}</li>
                                <li>{t('protocoreStats.oath_strength')}</li>
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
                    <div className={styles.protRowHover}>
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
                            <div>{t('protocoreStats.atk')}</div>
                        </div>
                    </div>
                    {/*            <div className={styles.protRowHover}>
                        <div className={styles.multipleStatProt}>
                            <div className={styles.multipleStatStyle}>*/}

                    {/*DELTA*/}
                    <div className={styles.protRowHover}>
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
                                <li>{t('protocoreStats.hp_bonus')}</li>
                                <li>{t('protocoreStats.atk_bonus')}</li>
                                <li>{t('protocoreStats.def_bonus')}</li>
                                <li>{t('protocoreStats.crit_rate')}</li>
                                <li>{t('protocoreStats.crit_dmg')}</li>
                                <li>{t('protocoreStats.dmg_boost_to_weakened')}</li>
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