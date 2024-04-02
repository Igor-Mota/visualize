import { Poppins } from 'next/font/google'
import Image from 'next/image'
import styles from './styles.module.scss'
import { useMedia } from 'react-use'

const poppins400 = Poppins({ subsets: ['latin'], style: 'normal', weight: '400' })

export default function Plans() {
    
    const isMobile = useMedia('(max-width:600px)')

    return (
        <div className={styles.plans}>
            <div className="container">
                <div className={styles.content}>
                    <div className={`${styles.card} d-flex flex-column flex-md-row`}>
                        <div className={styles.image}>
                            <Image src='/gifs/entrega-de-alimentos.gif' alt='' width={isMobile ? 200 : 486} height={isMobile ? 300 : 498} />
                        </div>
                        <div className={styles.contentText}>
                            <div className={styles.text}>
                                <h2 className={poppins400.className}>Tenha mais agilidade e satisfação no atendimento</h2>
                                <p>Ninguém gosta de filas, né? Aqui, você emite as notas fiscais com rapidez e ganha flexibilidade para receber e pagar :)</p>
                                
                                <button className="btn default primary">
                                    Solicite uma Demonstração
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.line} d-none d-md-flex`}>
                        <img src="/images/linha.png" alt="" />
                    </div>
                    <div className={`${styles.card} d-flex flex-column flex-md-row`}>
                        <div className={styles.contentText}>
                            {/*<div className={`${styles.value} ${styles.deluxe}`}>
                                <span>$29</span>
                            </div>*/}
                            <div className={styles.text}>
                                <h2 className={`${poppins400.className} text-center tex-md-start`}>Reduza os prejuízos no estoque da loja</h2>
                                <p className='text-center text-md-start'>Agilidade é ter tudo num único sistema, moderno e prático. Aproveite o alerta de estoque mínimo e tenha a contagem rápida e sem erros.</p>
                                {/*<ul>
                                    <li><p>Single Domain</p></li>
                                    <li><p>15 GB Disk Space</p></li>
                                    <li><p>100 GB Transfer</p></li>
                                    <li><p>5 Email Account </p></li>
                                    <li><p>Free Domain Registration</p></li>
                                    <li><p>99.9% Uptime Guarantee</p></li>
                                </ul>*/}
                                
                                <button className="btn default primary">
                                    Solicite uma Demonstração
                                </button>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <Image src='/gifs/armazem.gif' alt='' width={isMobile ? 200 : 486} height={isMobile ? 300 : 498} />
                        </div>
                    </div>
                    <div className={`${styles.line} d-none d-md-flex`}>
                        <img src="/images/linhaInversa.png" alt="" />
                    </div>
                    <div className={`${styles.card} d-flex flex-column flex-md-row`}>
                        <div className={styles.image}>
                            <Image src='/gifs/lista-de-controle.gif' alt='' width={isMobile ? 200 : 486} height={isMobile ? 300 : 498} />
                        </div>
                        <div className={styles.contentText}>
                            {/*<div className={`${styles.value} ${styles.ultimate}`}>
                                <span>$29</span>
                            </div>*/}
                            <div className={styles.text}>
                                <h2 className={poppins400.className}>Gerencie com clareza e facilidade</h2>
                                <p>Sua loja em movimento! Tenha mais segurança, tranquilidade e tecnologia, com dados reais e detalhados num sistema leve e rapidinho. <br /> Otimize as operações da sua empresa com uso dos recursos funcionais do nosso ERP.
                                </p>
                                {/*<ul>
                                    <li><p>Single Domain</p></li>
                                    <li><p>15 GB Disk Space</p></li>
                                    <li><p>100 GB Transfer</p></li>
                                    <li><p>5 Email Account </p></li>
                                    <li><p>Free Domain Registration</p></li>
                                    <li><p>99.9% Uptime Guarantee</p></li>
                                </ul>*/}
                                
                                <button className="btn default primary">
                                    Solicite uma Demonstração
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}