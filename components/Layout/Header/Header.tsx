import style from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
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
                        <Link href="#" className={style.page_link}>
                            <a className={style.link}>
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
                        <Link href="#" className={style.page_link}>
                            <a className={style.link}>
                                Контакты
                            </a>
                        </Link>
                        <Link href="#" className={style.page_link}>
                            <a className={style.link}>
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
