import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import { useRouter } from 'next/router'
import MainLayout from '../../components/shared/main-layout/main-layout'
import WriteToUs from '../../components/shared/write-to-us/write-to-us'
import RootSection from '../../components/shared/root-section/root-section'
import CarItem from '../../components/shared/car-item/car-item'
import { Cars } from '../../types/Cars'

interface AutoparkTypes {
	carsPark: Cars
}

const Autopark: NextPageWithLayout<AutoparkTypes> = ({carsPark}) => {
	const pageName: string = carsPark.title
	const pageTitle: string = carsPark.pageTitle
	const route = useRouter()
	let pages: string[] = []

	pages.push(pageName)

	return (
		<RootSection pageTitle={pageTitle} pages={pages}>
			<div className="container">
				<CarItem cars={carsPark} rootPath={route.pathname} />
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
	const res = await fetch(`${process.env.API_HOST}/data`)
	const carsPark = await res.json()
	if (!carsPark) {
		return {
			notFound: true
		}
	}
	return {
		props: {
			carsPark: carsPark.cars,
		},
	}
}
