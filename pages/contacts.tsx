import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { ContactsPage } from '../types/contacts'
import MainLayout from '../components/shared/main-layout/main-layout'
import ContactsInfoPage from '../components/Layout/Sections/contacts-info-page/contacts-info-page'
import RootSection from '../components/shared/root-section/root-section'

interface ContactsTypes {
	contactsPage: ContactsPage
}

const Contacts: NextPageWithLayout<ContactsTypes> = ({contactsPage}) => {

	return (
		<RootSection pageTitle={contactsPage.pageTitle} pages={[contactsPage.title]}>
			<ContactsInfoPage contacts={contactsPage.contacts} address={contactsPage.address}/>
		</RootSection>
	)
}

Contacts.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout title="Контакты">
			{page}
		</MainLayout>
	)
}

export default Contacts

export async function getServerSideProps() {
	const res = await fetch(`${process.env.API_HOST}/data`)
	const data = await res.json()
	if (!res.ok) {
		throw new Error(`Failed to fetch posts, received status ${res.status}`)
	}
	return {
		props: {
			contactsPage: data.contactsPage,
		},
	}
}
