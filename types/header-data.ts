export interface HeaderData {
	title: string
	link: string
	logo: Logo
	top: Top
	bottom: {
		left: NavList[]
		right: NavList[]
	}
}

export interface Top {
	orderBtn: NavList
	listContacts: TopContactsList[]
}

export interface TopContactsList {
	icon: string
	connection: string
	link: string
}

export interface NavList {
	name: string
	link: string
}

export interface Logo {
	img: string
	alt: string
}
