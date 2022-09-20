import style from './Footer.module.scss'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'
import location from '../../../public/images/icons/location.svg'
import phone from '../../../public/images/icons/phone.svg'
import whatsapp from '../../../public/images/icons/whatsapp.svg'

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.wrap}>
					<div className={style.nav}>
						<ul className={style.list}>
							<li className={style.item}>
								<Link href="/autopark">
									<a className={style.link}>Автопарк</a>
								</Link>
							</li>
							<li className={style.item}>
								<Link href="/autopark">
									<a href="/contacts" className={style.link}>Контакты</a>
								</Link>
							</li>
							<li className={style.item}>
								<Link href="/#benefits">
									<a className={style.link}>Услуги</a>
								</Link>
							</li>
							<li className={style.item}>
								<Link href="/about">
									<a className={style.link}>О нас</a>
								</Link>
							</li>
							<li className={style.item}>
								<Link href="/#orderForm">
									<a className={style.link}>Заявка</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className={style.content}>
						<Link href={'/'} className={style.link}>
							<a>
								<div
									className={style.logo}
									aria-label="Логотип"
									style={{backgroundImage: `url(${logo.src})`}}> </div>
							</a>
						</Link>
						<div className={style.contacts}>
							<Link href="#">
								<a>
									<div className={style.point}>
										<div
											className={style.icon}
											aria-label="Локация"
											style={{backgroundImage: `url(${location.src})`}}
										> </div>
										<div className={style.text}>
											г. Владимир, ул. Красивых Молдавских
											Партизан, строение 20, д. 65
										</div>
									</div>
								</a>
							</Link>
							<Link href="#">
								<a>
									<div className={style.point}>
										<div
											className={style.icon}
											aria-label="Номер телефона"
											style={{backgroundImage: `url(${phone.src})`}}
										> </div>
										<div className={style.text}>
											+7999 999 99 99
										</div>
									</div>
								</a>
							</Link>
							<Link href="#">
								<a>
									<div className={style.point}>
										<div
											className={style.icon}
											aria-label="Ватсап"
											style={{backgroundImage: `url(${whatsapp.src})`}}
										> </div>
										<div className={style.text}>
											Напишите нам в Whatsapp
										</div>
									</div>
								</a>
							</Link>
							<small className={style.copyright}>
								{/*прописать функцию даты*/}
								© Все права защищены {2022}
							</small>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
