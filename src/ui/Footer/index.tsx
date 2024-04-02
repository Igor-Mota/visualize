import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.scss'
import { useState } from 'react';

export default function Footer() {
    const [comments, setComments] = useState([
        {
            id: '1',
            text: 'Contamos com uma rede completa, nos adaptamos às necessidades de nossos clientes. Conte como nossa expertise para acompanhar todos os processos das empresas',
            name: '',
            function: 'CEO Code Sistemas'
        }
    ])
    return (
        <footer id='contact' className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.footerTop}>
                        <div className={`${styles.footerTopContent} d-flex  flex-column`}>
                            <div className={styles.text}>
                                <h3>Fique por dentro de tudo!</h3>
                                <p>Insira seu e-mail e receba todas as notícias e anúncios da Code Sistemas.</p>
                            </div>
                            <form className='d-flex flex-column w-100'> 
                                <input className='w-100' type="email" name="email" id="email" placeholder='Seu Email'/>
                                <button className="btn default w-100 mt-2">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                    <div className={`${styles.footerBottom} d-flex flex-column justify-content-around align-items-center`}>
                        <div className={styles.footerDescription}>
                            <div className={styles.logo}>
                                <img src="/images/logo-code.png" alt="" />
                            </div>

                            <p className={styles.description}>Desde 2013, a Code Sistemas desenvolve e comercializa soluções inovadoras para facilitar o gerenciamento de estabelecimentos varejistas.</p>
                            <p className={styles.copyright}>
                                Desenvolvido por: <Link href='https://mayersoft.com.br'>Mayersoft</Link>
                            </p>
                        </div>
                        <div className={styles.menu}>
                            <p className={styles.title}>
                                Menu
                            </p>
                            <Link href='#'>Segmento</Link>
                            <Link href='#'>Soluções</Link>
                            <Link href='#'>Code Sistemas</Link>
                        </div>
                        <div className={styles.menu}>
                            <p className={styles.title}>
                                Contato
                            </p>
                            <p>contato@codesistemas.com.br</p>
                            <p>31 3132-5566 </p>
                            <p>31 93144260</p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}