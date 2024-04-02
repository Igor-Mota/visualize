import Image from 'next/image'
import styles from './styles.module.scss'
import { Poppins } from 'next/font/google'

const poppinsBold = Poppins({ subsets: ['latin'], style: 'normal', weight: '600' })
const poppinsNormal = Poppins({ subsets: ['latin'], style: 'normal', weight: '400' })

export default function Banner() {
    return (
        <div id='banner' className={`${styles.banner}`}>
            <div className="container" style={{height: '100%'}}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h1 className={poppinsBold.className}>Sistemas Inovadores que Transformam</h1>
                        <p>Descubra soluções tecnológicas que elevam seu negócio a novos patamares de eficiência e inovação.</p>
                        {/*<div className={styles.list}>
                            <p>
                                .com <span>$9.99</span>
                            </p>
                            <p>
                                .net <span>$9.99</span>
                            </p>
                            <p>
                                .Org <span>$9.99</span>
                            </p>
                            <p>
                                .Co <span>$9.99</span>
                            </p>
                            <p>
                                .Uk <span>$9.99</span>
                            </p>
                        </div>*/}
                    </div>
                    <div className={styles.image}>
                        <Image src={'/images/banner.png'} alt='Imagem Banner' fill quality={100}/>
                    </div>
                </div>
            </div>
        </div>
    )
}