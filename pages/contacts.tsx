import { FC } from 'react'
import Header from '../components/Layout/Header/Header'
import MainLayout from '../components/shared/main-layout/main-layout'
import Footer from '../components/Layout/Footer/Footer'
import ContactsInfoPage from '../components/Layout/Sections/contacts-info-page/contacts-info-page'

const Contacts: FC<any> = ({contacts}) => {
	const pageName: string = 'Контакты'

	return (
		<>
			<Header activePage={pageName}/>
			<MainLayout title={pageName}>
				<ContactsInfoPage contactsPage={contacts}/>
			</MainLayout>
			<Footer />
		</>
	)
}

export default Contacts

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/data')
	const data = await res.json()
	if (!res.ok) {
		throw new Error(`Failed to fetch posts, received status ${res.status}`)
	}
	return {
		props: {
			contacts: data.contactsPage,
		},
		revalidate: 10,
	}
}
