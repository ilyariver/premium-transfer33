import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { About } from '../types/about'
import MainLayout from '../components/shared/main-layout/main-layout'
import AboutPage from '../components/Layout/Sections/about-page/about-page'
import WriteToUs from '../components/shared/write-to-us/write-to-us'
import RootSection from '../components/shared/root-section/root-section'
import { url } from '../common/urlData'

interface AboutTypes {
	about: About
}

const About: NextPageWithLayout<AboutTypes> = ({about}) => {
	if (!about) return null

	return (
		<RootSection pageTitle={about.aboutPageTitle} pages={[about.aboutPageTitle]}>
			<AboutPage {...about} />
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
	const res = await fetch(`${url}/wp-json/wp/v2/pages?_embed`)
	const fullData = await res.json()
	if (!fullData) {
		return {
			notFound: true
		}
	}
	const dataCFS = fullData[0].CFS

	return {
		props: {
			about: {
				aboutPageTitle: dataCFS.aboutPageTitle,
				aboutPageDescription: dataCFS.aboutPageDescription,
				directorName: dataCFS.directorName,
				aboutDirector: dataCFS.aboutDirector,
				companyMission: dataCFS.companyMission,
				numberOrders: dataCFS.numberOrders,
			}
		},
	}
}
