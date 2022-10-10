import { Logo, NavList } from './header-data'

export interface FooterData {
	title: string
	link: string
	logo: Logo
	navList: NavList[]
	contactsList: ContactsList[]
	copyright: string
}


export interface ContactsList {
	iconPageContact?: string
	iconFooterContact: string
	nameFooterContact: string
	linkFooterContact: string
}
