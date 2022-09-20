import type { NextPage } from 'next'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import MainLayout from '../components/shared/main-layout/main-layout'
import SectionMain from '../components/Layout/Sections/home-page/section-main/section-main'
import SectionBenefits from '../components/Layout/Sections/home-page/section-benefits/section-benefits'
import SectionAutoPark from '../components/Layout/Sections/home-page/section-auto-park/section-auto-park'
import SectionListAdvantages from '../components/Layout/Sections/home-page/section-list-advantages/section-list-advantages'
import SectionForm from '../components/Layout/Sections/home-page/section-form/section-form'
import SectionGet from '../components/Layout/Sections/home-page/section-get/section-get'
import { FC } from 'react'
import { useRouter } from 'next/router'

const Home: FC<any> = ({carsPark}) => {
    const { cars } = carsPark
    const route = useRouter()
    console.log(route)
    return (
        <>
            <Header />
            <MainLayout title="Главная">
                <SectionMain />
                <SectionBenefits />
                <SectionAutoPark cars={cars}/>
                <SectionListAdvantages />
                <SectionForm />
                <SectionGet />
            </MainLayout>
            <Footer />
        </>
    )
}

export default Home

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/data')
    const carsPark = await res.json()
    if (!res.ok) {
        throw new Error(`Failed to fetch posts, received status ${res.status}`)
    }
    return {
        props: {
            carsPark,
        },
        revalidate: 10,
    }
}
