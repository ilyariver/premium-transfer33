import { FC } from 'react'
import MainLayout from '../../components/shared/main-layout/main-layout'
import Header from '../../components/Layout/Header/Header'
import Footer from '../../components/Layout/Footer/Footer'
import SectionFleet from '../../components/Layout/Sections/autopark-page/section-fleet/section-fleet'
import { useRouter } from 'next/router'

const Autopark: FC<any> = ({carsPark}) => {
	const pageName: string = 'Автопарк'
	const route = useRouter()
	console.log(route)

	return (
		<>
			<Header activePage={pageName}/>
			<MainLayout title={pageName}>
				<SectionFleet pageName={pageName} carsPark={carsPark} rootPath={route.pathname}/>
			</MainLayout>
			<Footer />
		</>
	)
}

export default Autopark

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/data')
	const carsPark = await res.json()
	if (!res.ok) {
		throw new Error(`Failed to fetch posts, received status ${res.status}`)
	}
	return {
		props: {
			carsPark: carsPark.cars,
		},
		revalidate: 10,
	}
}
