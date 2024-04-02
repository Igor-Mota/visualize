import { IconCalc, IconChave } from '../Svg'
import styles from './styles.module.scss'
 
export default function Feature (){
  return (
    <div className={styles.feature}>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>What can we help you?</h2>
                    <p>If you are planning on developing a product landing </p>
                </div>
                <div className={styles.featureCircle}>
                    <ul>
                        <li>
                            <div className={styles.icon}>
                                <IconCalc /> 
                            </div>
                            <h6>Marketing</h6>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <IconCalc /> 
                            </div>
                            <h6>VPS</h6>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <IconCalc /> 
                            </div>
                            <h6>Email</h6>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <IconChave /> 
                            </div>
                            <h6>SEO</h6>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <IconCalc /> 
                            </div>
                            <h6>Reseller <br /> Hosting</h6>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <IconCalc /> 
                            </div>
                            <h6>Web <br /> Security</h6>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <IconCalc /> 
                            </div>
                            <h6>Business <br /> Hosting</h6>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <IconChave /> 
                            </div>
                            <h6>Fast <br /> Deployment</h6>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <IconCalc /> 
                            </div>
                            <h6>Protect and <br />backup</h6>
                        </li>
                    </ul>
                    <div className={styles.dotCircle}>
                        <div className={styles.effectCircle}>
                        </div>
                    </div>
                    <div className={styles.circleBg}>
                        <img src="/images/feature-image.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}