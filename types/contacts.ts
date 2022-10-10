export interface ContactsPage {
	contactsPageName: string
	contactsPageTitle: string
	contactsList: Contacts[]
}

export interface Contacts {
	contactsType: string
	contactIcon: string
	contactView: string
	contactLink: string
}

export interface Address {
	iconPageContact?: string
	namePageContact?: string
	iconFooterContact?: string
	nameFooterContact: string
	linkFooterContact: string
}

export interface Location {
	iconPageLocation?: string
	iconFooterLocation?: string
	nameFooterLocation: string
	linkFooterLocation?: string
}
