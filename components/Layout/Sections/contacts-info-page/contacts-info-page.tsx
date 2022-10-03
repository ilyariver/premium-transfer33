import { FC } from 'react'
import { Address, Contacts } from '../../../../types/contacts'
import style from './contacts-info-page.module.scss'
import Link from 'next/link'


interface ContactsTypes {
	contacts: Contacts[]
	address: Address
}

const ContactsInfoPage: FC<ContactsTypes> = ({ contacts, address }) => {
	if (!contacts) return null

	return (
		<>
			<div className="container">
				<div className={style.contacts}>
					<ul className={style.list}>
						{
							contacts.map((contact) => {
								return (
									<li key={contact.id} className={style.list_item}>
										<Link href={contact.phone.link}>
											<a className={style.item}>
												<div className={style.title_content}>
													<div
														className={style.icon}
														aria-label={'иконка ' + contact.type}
														style={{backgroundImage: `url(${contact.icon})`}}
													>
													</div>
													<div className={style.type}>{contact.type}</div>
												</div>
												<div className={style.text}>{contact.phone.tel}</div>
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
							 style={{backgroundImage: `url(${address.icon})`}}> </div>
						<div className={style.address_text}>{address.text}</div>
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
