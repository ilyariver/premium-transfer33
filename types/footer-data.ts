import { Logo, NavList } from './header-data'

export interface FooterData {
	title: string
	link: string
	logo: Logo
	navList: NavList[]
	contactsList: contactsList[]
	copyright: string
}


export interface contactsList {
	icon: string
	name: string
	link: string
}
