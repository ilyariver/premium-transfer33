import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { About } from '../types/about'
import MainLayout from '../components/shared/main-layout/main-layout'
import AboutPage from '../components/Layout/Sections/about-page/about-page'
import WriteToUs from '../components/shared/write-to-us/write-to-us'
import RootSection from '../components/shared/root-section/root-section'

interface AboutTypes {
	about: About
}

const About: NextPageWithLayout<AboutTypes> = ({about}) => {
	if (!about) return null

	return (
		<RootSection pageTitle={about.title} pages={[about.title]}>
			<AboutPage {...about}/>
		</RootSection>
	)
}

About.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout title="О нас">
			{page}
			<WriteToUs />
		</MainLayout>
	)
}

export default About

export async function getServerSideProps() {
	const res = await fetch('http://localhost:3000/api/data')
	const data = await res.json()
	if (!res.ok) {
		throw new Error(`Failed to fetch posts, received status ${res.status}`)
	}
	return {
		props: {
			about: data.aboutCompany
		},
	}
}
