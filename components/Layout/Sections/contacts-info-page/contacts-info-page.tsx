import { FC } from 'react'
import { Address, Location } from '../../../../types/contacts'
import style from './contacts-info-page.module.scss'
import Link from 'next/link'


interface ContactsTypes {
	contacts: Address[]
	location: Location
}

const ContactsInfoPage: FC<ContactsTypes> = ({ contacts, location }) => {
	if (!contacts) return null

	return (
		<>
			<div className="container">
				<div className={style.contacts}>
					<ul className={style.list}>
						{
							contacts.map((contact) => {
								return (
									<li key={contact.nameFooterContact} className={style.list_item}>
										<Link href={contact.linkFooterContact}>
											<a className={style.item}>
												<div className={style.title_content}>
													<div
														className={style.icon}
														aria-label={'иконка ' + contact.nameFooterContact}
														style={{backgroundImage: `url(${contact.iconPageContact})`}}
													>
													</div>
													<div className={style.type}>{ contact.namePageContact }</div>
												</div>
												<div className={style.text} dangerouslySetInnerHTML={{ __html: contact.nameFooterContact }} />
											</a>
										</Link>
									</li>
								)
							})
						}
					</ul>
				</div>
				<div className={style.address_title}><span>Адрес</span></div>
				<div className={style.wrap}>
					<div className={style.address_content}>
						<div className={style.address_icon}
							 style={{backgroundImage: `url(${location.iconPageLocation})`}}> </div>
						<div className={style.address_text} dangerouslySetInnerHTML={{ __html: location.nameFooterLocation }} />
					</div>
				</div>
			</div>
			<div className={style.maps}>
				<div style={{ position: 'relative', overflow: 'hidden',fontSize: 0 }}><a
					href="https://yandex.ru/maps/192/vladimir/?utm_medium=mapframe&utm_source=maps"
					style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px'}}>Владимир</a><a
					href="https://yandex.ru/maps/192/vladimir/?ll=40.406635%2C56.129057&utm_medium=mapframe&utm_source=maps&z=13"
					style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}}>Яндекс Карты — транспорт,
					навигация, поиск мест</a>
					<iframe src="https://yandex.ru/map-widget/v1/-/CBR15MxKOD" width="100%" height="400"
							frameBorder="3" allowFullScreen={true} style={{position:'relative', border: 'none', filter: 'brightness(0.8)'}}> </iframe>
				</div>
			</div>
		</>
	)
}

export default ContactsInfoPage
