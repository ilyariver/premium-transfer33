import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import { useRouter } from 'next/router'
import MainLayout from '../../components/shared/main-layout/main-layout'
import WriteToUs from '../../components/shared/write-to-us/write-to-us'
import RootSection from '../../components/shared/root-section/root-section'
import CarItem from '../../components/shared/car-item/car-item'
import { Cars } from '../../types/Cars'
import { url } from '../../common/urlData'

interface AutoparkTypes {
	cars: Cars
}

const Autopark: NextPageWithLayout<AutoparkTypes> = ({cars}) => {
	const pageName: string = cars?.title
	const pageTitle: string = cars?.pageTitle
	const route = useRouter()
	let pages: string[] = []

	pages.push(pageName)

	return (
		<RootSection pageTitle={pageTitle} pages={pages}>
			<div className="container">
				<CarItem cars={cars} rootPath={route.pathname} />
			</div>
		</RootSection>
	)
}

Autopark.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout title="Автопарк">
			{ page }
			<WriteToUs />
		</MainLayout>
	)
}

export default Autopark

export async function getServerSideProps() {
	const res = await fetch(`${url}/wp-json/wp/v2/pages?_embed`)
	const fullData = await res.json()
	if (!fullData) {
		return {
			notFound: true
		}
	}

	const dataMain = fullData[2].CFS

	return {
		props: {
			cars: {
				title: dataMain.title,
				parentPage: dataMain.parentPage,
				pageTitle: dataMain.pageTitle,
				sectionTitle: dataMain.sectionTitle,
				park: dataMain.parkList,
			},
		}
	}
}
