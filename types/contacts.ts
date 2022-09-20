import location from '../public/images/icons/location-big.svg'

export interface ContactsPage {
	title: string
	pageTitle: string
	contacts: Contacts[]
	address: Address
}

export interface Contacts {
	id: number
	type: string
	icon: string
	phone: {
		tel: string
		link: string
	}
}

export interface Address {
	icon: string
	text: string
}
