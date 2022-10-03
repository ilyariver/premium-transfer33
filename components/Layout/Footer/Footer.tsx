import { FC } from 'react'
import style from './Footer.module.scss'
import Link from 'next/link'
import { FooterData } from '../../../types/footer-data'

interface FooterTypes {
	data?: FooterData
}

const Footer: FC<FooterTypes> = ({data}) => {
	if (!data) return null

	const { navList, contactsList, logo, link, copyright } = data
	const foundingDate = 2022

	const date = new Date().getFullYear()
	const copyrightDate = date === foundingDate ? foundingDate : `${foundingDate}-${date}`


	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.wrap}>
					<div className={style.nav}>
						<ul className={style.list}>
							{
								navList.map(item => {
									return (
										<li key={item.name} className={style.item}>
											<Link href={item.link}>
												<a className={style.link}>{item.name}</a>
											</Link>
										</li>
									)
								})
							}
						</ul>
					</div>
					<div className={style.content}>
						<Link href={link}>
							<a className={style.logo_link}>
								<div
									className={style.logo}
									aria-label={logo.alt}
									style={{backgroundImage: `url(${logo.img})`}}> </div>
							</a>
						</Link>
						<div className={style.contacts}>
							{
								contactsList.map(contact => {
									return (
										<div key={ contact.name } className={style.contacts_wrap}>
											<Link href={ contact.link }>
												<a>
													<div className={style.point}>
														<div
															className={style.icon}
															aria-label={ contact.name }
															style={{backgroundImage: `url(${contact.icon})`}}
														> </div>
														<div className={style.text} dangerouslySetInnerHTML={{ __html: contact.name }} />
													</div>
												</a>
											</Link>
										</div>
									)
								})
							}
							<small className={style.copyright}>
								{ copyright } { copyrightDate }
							</small>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
