import { FC, MouseEvent, useEffect, useState } from 'react'
import { HeaderData } from '../../../types/header-data'
import style from './Header.module.scss'
import Link from 'next/link'

interface HeaderTypes {
    data?: HeaderData
    activePage?: string | string[] | undefined
}

const Header: FC<HeaderTypes> = ({activePage, data}) => {
    const [closeNavMenu, setCloseNavMenu] = useState<boolean>(false)

    useEffect(() => {
        if (closeNavMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [closeNavMenu])

    if (!data) return null
    const { top, bottom, logo, link } = data

    function onCloseNavMenu(event: MouseEvent<HTMLButtonElement>) {
        setCloseNavMenu(prevState => prevState = !closeNavMenu)
    }

    return (
        <header className={style.header}>
           <div className="container">
               <div className={style.burger}>
                   <button className={style.burger_btn} onClick={onCloseNavMenu} />
               </div>
           </div>
            <div className={`${style.header_wrap} ${closeNavMenu ? style.active : ''}`}>
                <div className={style.top}>
                    <div className="container">
                        <div className={style.top_wrap}>
                            <div className={style.top_order_btn}>
                                <Link href={top.orderBtn.link}>
                                    <a onClick={() => setCloseNavMenu(false)} className={style.link_order}>
                                        <span className={style.to_order}>{top.orderBtn.name}</span>
                                    </a>
                                </Link>
                            </div>
                            <div className={style.header_contacts_wrap}>
                                <address className={style.contacts}>
                                    {
                                        top.listContacts.map(contacts => {
                                            return (
                                                <div key={contacts.connection} className={style.phone}>
                                                    <Link href={contacts.link}>
                                                        <a className={style.phone_number}>
                                                            <div className={style.call_icon} style={{backgroundImage: `url(${contacts.icon})`}}> </div>
                                                            <div className={style.tel}>{contacts.connection}</div>
                                                        </a>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className="container">
                        <div className={style.close_btn_wrap}>
                            <button className={style.close_btn} onClick={onCloseNavMenu} />
                        </div>
                        <nav className={style.nav}>
                            <div className={style.pages}>
                                {
                                    bottom.left.map(link => {
                                        return (
                                            <Link key={link.link} href={link.link} className={style.page_link}>
                                                <a onClick={() => setCloseNavMenu(false)} className={`${style.link} ${activePage === link.name ? style.active : ''}`}>
                                                    { link.name }
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            <Link href={link}>
                                <a>
                                    <div
                                        className={style.logo}
                                        aria-label={logo.alt}
                                        style={{backgroundImage: `url(${logo.img})`}}
                                    > </div>
                                </a>
                            </Link>
                            <div className={style.pages}>
                                {
                                    bottom.right.map(link => {

                                        return (
                                            <Link key={link.link} href={link.link} className={style.page_link}>
                                                <a onClick={() => setCloseNavMenu(false)} className={`${style.link} ${activePage === link.name ? style.active : ''}`}>
                                                    { link.name }
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
