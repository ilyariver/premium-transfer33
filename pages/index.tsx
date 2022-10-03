import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import MainLayout from '../components/shared/main-layout/main-layout'
import SectionMain from '../components/Layout/Sections/home-page/section-main/section-main'
import SectionBenefits from '../components/Layout/Sections/home-page/section-benefits/section-benefits'
import SectionAutoPark from '../components/Layout/Sections/home-page/section-auto-park/section-auto-park'
import SectionListAdvantages from '../components/Layout/Sections/home-page/section-list-advantages/section-list-advantages'
import SectionForm from '../components/Layout/Sections/home-page/section-form/section-form'
import SectionGet from '../components/Layout/Sections/home-page/section-get/section-get'
import WriteToUs from '../components/shared/write-to-us/write-to-us'


const Home: NextPageWithLayout<any> = ({data}) => {

    const {
        header,
        cars,
        firstScreen,
        secondScreen,
        thirdScreen,
        formScreen,
        whatGetScreen,
    } = data


    return (
        <>
            <SectionMain data={firstScreen} logo={header.logo} />
            <SectionBenefits data={secondScreen} />
            <SectionAutoPark cars={cars}/>
            <SectionListAdvantages data={thirdScreen} />
            <SectionForm data={formScreen}/>
            <SectionGet data={whatGetScreen} />
        </>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout title="Главная">
            {page}
            <WriteToUs />
        </MainLayout>
    )
}

export default Home

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/data')
    const fullData = await res.json()
    if (!fullData) {
        return {
            notFound: true
        }
    }

    return {
        props: {
           data: fullData
        }
    }
}
