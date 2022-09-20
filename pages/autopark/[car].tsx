import { FC } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Header from '../../components/Layout/Header/Header'
import MainLayout from '../../components/shared/main-layout/main-layout'
import Footer from '../../components/Layout/Footer/Footer'

const Catalog = () => {
	const route = useRouter()
	// console.log(route)
	return (
		<>
			<Header activePage={'Автопарк'}/>
			<MainLayout title={'Автопарк'}>
				<h1>ТЕстус</h1>
			</MainLayout>
			<Footer />
		</>
	)
};

export default Catalog;



export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	console.log(params?.car)
	return {
		props: {}, // will be passed to the page component as props
	}
}
