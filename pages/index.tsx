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
        logo,
        cars,
        firstScreen,
        secondScreen,
        fourthScreen,
        formScreen,
        whatGetScreen,
    } = data


    return (
        <>
            <SectionMain data={firstScreen} logo={logo} />
            <SectionBenefits data={secondScreen} />
            <SectionAutoPark cars={cars}/>
            <SectionListAdvantages data={fourthScreen} />
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
    const res = await fetch(`${process.env.API_HOST}/wp-json/wp/v2/pages?_embed`)
    const fullData = await res.json()
    if (!fullData) {
        return {
            notFound: true
        }
    }
    const dataCFS = fullData[2].CFS

    return {
        props: {
           data: {
               logo: dataCFS.logo_img,
               firstScreen: {
                   backgroundImage: dataCFS.backgroundImage,
                   buttonToFormText: dataCFS.buttonToFormText,
                   linkToForm: dataCFS.linkToForm,
                   hasScroll: dataCFS.hasScroll,
               },
               secondScreen: {
                   benefitsSectionTitle: dataCFS.benefitsSectionTitle,
                   benefitsList: dataCFS.benefitsList
               },
               cars: {
                   title: dataCFS.title,
                   parentPage: dataCFS.parentPage,
                   pageTitle: dataCFS.pageTitle,
                   sectionTitle: dataCFS.sectionTitle,
                   park: dataCFS.parkList,
               },
               fourthScreen: {
                   advantagesTitle: dataCFS.advantagesTitle,
                   advantagesImg: dataCFS.advantagesImg,
                   advantagesList: dataCFS.advantagesList,
               },
               formScreen: {
                   titleForm: dataCFS.titleForm,
                   textForm: dataCFS.textForm,
                   imgBackForm: dataCFS.imgBackForm,
                   nameInput: dataCFS.nameInput,
                   telInput: dataCFS.telInput,
                   textAreaInput: dataCFS.textAreaInput,
                   formButton: dataCFS.formButton,

               },
               whatGetScreen: {
                   whatTitle: dataCFS.whatTitle,
                   whatList: dataCFS.whatList,
               },
           }
        }
    }
}
