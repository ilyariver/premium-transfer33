import { FC } from 'react'
import style from './Header.module.scss'
import Link from 'next/link'

interface HeaderTypes {
    activePage?: string
}

const Header: FC<HeaderTypes> = ({activePage}) => {


    return (
        <header className={style.header}>
            <div className="container">
                <nav className={style.nav}>
                    <div className={style.pages}>
                        <Link href="#">
                            <a className={style.phone_number}>
                                <div className={style.icon}> </div>
                                <div>+7 999 999 99 99</div>
                            </a>
                        </Link>
                        <Link href="/autopark" className={style.page_link}>
                            <a className={`${style.link} ${activePage === 'Автопарк' ? style.active : ''}`}>
                                Автопарк
                            </a>
                        </Link>
                    </div>
                    <Link href="/">
                        <a>
                            <div className={style.logo} aria-label="Логотип"> </div>
                        </a>
                    </Link>
                    <div className={style.pages}>
                        <Link href="/contacts" className={style.page_link}>
                            <a className={`${style.link} ${activePage === 'Контакты' ? style.active : ''}`}>
                                Контакты
                            </a>
                        </Link>
                        <Link href="/about" className={style.page_link}>
                            <a className={`${style.link} ${activePage === 'О компании' ? style.active : ''}`}>
                                О компании
                            </a>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
