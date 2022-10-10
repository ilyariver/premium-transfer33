import { FC } from 'react'
import style from './Footer.module.scss'
import Link from 'next/link'

interface FooterTypes {
	data?: any
}

const Footer: FC<FooterTypes> = ({data}) => {
	if (!data) return null

	const {
		footerNav,
		footerContactsList,
		footerLogo,
		copyrightFooterText,
		iconFooterLocation,
		linkFooterLocation,
		nameFooterLocation,
	} = data

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
								footerNav.map((item: any) => {
									return (
										<li key={item.nameFooterNav} className={style.item}>
											<Link href={item.linkFooterNav}>
												<a className={style.link}>{item.nameFooterNav}</a>
											</Link>
										</li>
									)
								})
							}
						</ul>
					</div>
					<div className={style.content}>
						<Link href="/">
							<a className={style.logo_link}>
								<div
									className={style.logo}
									aria-label="логотип"
									style={{backgroundImage: `url(${footerLogo})`}}> </div>
							</a>
						</Link>
						<div className={style.contacts}>
							{
								nameFooterLocation && <div className={style.contacts_wrap}>
									<Link href={ linkFooterLocation }>
										<a>
											<div className={style.point}>
												<div
													className={style.icon}
													aria-label={ nameFooterLocation }
													style={{backgroundImage: `url(${ iconFooterLocation })`}}
												> </div>
												<div className={style.text} dangerouslySetInnerHTML={{ __html: nameFooterLocation }} />
											</div>
										</a>
									</Link>
								</div>
							}
							{
								footerContactsList.map((contact: any) => {
									return (
										<div key={ contact.nameFooterContact } className={style.contacts_wrap}>
											<Link href={ contact.linkFooterContact }>
												<a>
													<div className={style.point}>
														<div
															className={style.icon}
															aria-label={ contact.nameFooterContact }
															style={{backgroundImage: `url(${contact.iconFooterContact})`}}
														> </div>
														<div className={style.text} dangerouslySetInnerHTML={{ __html: contact.nameFooterContact }} />
													</div>
												</a>
											</Link>
										</div>
									)
								})
							}
							<small className={style.copyright}>
								{ copyrightFooterText } { copyrightDate }
							</small>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
