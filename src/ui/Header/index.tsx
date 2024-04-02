import Link from 'next/link'
import { Mobile } from './mobile'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <>
        <div  className='header d-none d-md-flex'>
            <div className="container">
                <div className="row">
                    <div className="logoHeader">
                        <img src="/images/logo-pequena.png" alt="" />
                    </div>
                    <div className="navMenu">
                        <nav>
                            <ul className='listNav'>
{/*                                <li>
                                    <Link className='navLink' href={'#'}>Home</Link>
                                    <ul className="hoverNav">
                                        <li>
                                            <Link href={'#'}>Segmento</Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>Soluções</Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>Code Sistemas</Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>Seja Revenda</Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>Contato</Link>
                                        </li>
                                    </ul>
                                </li>*/}
                                <li>
                                    <Link className='navLink' href='#banner'>Home</Link>
                                </li>
                                <li>
                                    <Link className='navLink' href='#about'>Segmento</Link>
                                </li>
                                <li>
                                    <Link className='navLink' href='#solutions'>Soluções</Link>
                                </li>
                                <li>
                                    <Link className='navLink' href='#Acode'>Code Sistemas</Link>
                                </li>
                                <li>
                                    <Link className='navLink' href='#functionalities'>Funcionalidades</Link>
                                </li>
                                <li>
                                    <Link className='navLink' href='#contact'>Contato</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <Mobile />
        </>
    )
}