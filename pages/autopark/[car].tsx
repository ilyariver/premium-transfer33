import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import { NextPageWithLayout } from '../_app'
import { Cars } from '../../types/Cars'
import { useRouter } from 'next/router'
import MainLayout from '../../components/shared/main-layout/main-layout'
import SelectedCar from '../../components/Layout/Sections/autopark-page/selected-car/selected-car'
import WriteToUs from '../../components/shared/write-to-us/write-to-us'
import { url } from '../../common/urlData'

interface CarTypes {
	cars: Cars
}

const Catalog: NextPageWithLayout<CarTypes> = ({cars}) => {
	const route = useRouter()
	const selectRouteCar = route.query.car
	const currentCar = cars.park.filter(car => car.link === selectRouteCar)
	const car = currentCar.reduce((acc, car) => (acc = car, acc), {})

	return <SelectedCar pageName={selectRouteCar} car={car} parentLink={cars.parentPage} />
}



Catalog.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout title="Автопарк">
			{page}
			<WriteToUs />
		</MainLayout>
	)
}

export default Catalog;



export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${url}/wp-json/wp/v2/pages?_embed`)
	const fullData = await res.json()
	if (!fullData) {
		return {
			notFound: true
		}
	}
	const fullDataCFS = fullData[2].CFS

	return {
		props: {
			cars: {
				title: fullDataCFS.title,
				parentPage: fullDataCFS.parentPage,
				pageTitle: fullDataCFS.pageTitle,
				sectionTitle: fullDataCFS.sectionTitle,
				park: fullDataCFS.parkList,
			},
		}
	}
}
