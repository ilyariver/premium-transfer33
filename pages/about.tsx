import { FC } from 'react'
import Header from '../components/Layout/Header/Header'
import MainLayout from '../components/shared/main-layout/main-layout'
import Footer from '../components/Layout/Footer/Footer'
import { About } from '../types/about'
import AboutPage from '../components/Layout/Sections/about-page/about-page'

interface AboutTypes {
	about: About
}

const About: FC<AboutTypes> = ({about}) => {
	const pageName: string = about.aboutCompany.title

	return (
		<>
			<Header activePage={pageName}/>
			<MainLayout title={pageName}>
				<AboutPage aboutInfo={about}/>
			</MainLayout>
			<Footer />
		</>
	)
}

export default About

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/data')
	const data = await res.json()
	if (!res.ok) {
		throw new Error(`Failed to fetch posts, received status ${res.status}`)
	}
	return {
		props: {
			about: data.contactsPage
		},
		revalidate: 10,
	}
}
