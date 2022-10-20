import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { Address, ContactsPage, Location } from '../types/contacts'
import MainLayout from '../components/shared/main-layout/main-layout'
import ContactsInfoPage from '../components/Layout/Sections/contacts-info-page/contacts-info-page'
import RootSection from '../components/shared/root-section/root-section'
import { url } from '../common/urlData'

interface ContactsTypes {
	contactsPage: ContactsPage
	address: Address[]
	location: Location
}

const Contacts: NextPageWithLayout<ContactsTypes> = ({contactsPage, address, location}) => {

	return (
		<RootSection pageTitle={contactsPage.contactsPageTitle} pages={[contactsPage.contactsPageName]}>
			<ContactsInfoPage contacts={address} location={location} />
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
	const res = await fetch(`${url}/wp-json/wp/v2/pages?_embed`)
	const fullData = await res.json()
	if (!fullData) {
		return {
			notFound: true
		}
	}
	const dataCFS = fullData[1].CFS
	const dataCFSMain = fullData[2].CFS

	return {
		props: {
			contactsPage: {
				contactsPageName: dataCFS.contactsPageName,
				contactsPageTitle: dataCFS.contactsPageTitle,
			},
			address: dataCFSMain.footerContactsList,
			location: {
				iconPageLocation: dataCFSMain.iconPageLocation,
				nameFooterLocation: dataCFSMain.nameFooterLocation,
			}
		},
	}
}
