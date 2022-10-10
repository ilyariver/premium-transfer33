export interface HeaderData {
	logo_img: string
	top_button_title: string
	list_contacts: listHeaderContacts[]
	leftBottomNavList: NavList[]
	rightBottomNavList: NavList[]
}

export interface listHeaderContacts {
	icon: string
	connection: string
	link: string
}

export interface NavList {
	nameNavButton: string
	linkNavButton: string
}

export interface Logo {
	img: string
}
