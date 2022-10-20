import { FC, useEffect, useState } from 'react'
import { LayoutTypes } from '../../../types/layout-types'
import style from './main.module.scss'
import Head from 'next/head'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { DataTypes } from '../../../types/Data'
import { url } from '../../../common/urlData'

const MainLayout: FC<LayoutTypes> = ({children, title}) => {
	const [data, setData] = useState()
	const [sharingImg, setSharingImg] = useState()

	const getData = async  () => {
		const response = await fetch(`${url}/wp-json/wp/v2/pages?_embed`)
		const data = await response.json()
		setData(data[2].CFS)
		setSharingImg(data[2].CFS.sharing)
	}

	useEffect(() => {
		getData()
	},[])

	console.log('===',sharingImg)

	return (
		<>
			<Head>
				<title key="title">{`${title} | PREMIUM TRANSFER33`}</title>
				<meta property="og:image" content={sharingImg || ''}/>
				<meta property="og:image:width" content="1200"/>
				<meta property="og:image:height" content="630"/>
				<meta name="description" content="Компания Premium Transfer 33 предоставляет трансферные услуги на машинах бизнес-класса" />
				<meta name="keywords" content="трансфер, премиум трансфер 33, трансфер во Владимире, премиум автомобили во Владимире" />
				<meta property="og:title" content="Как быстро и элитно доехать по делам?" />
				<meta property="og:description" content="Компания Premium Transfer 33 предоставляет трансферные услуги на машинах бизнес-класса" />
				<meta property="og:url" content= "https://premiumtransfer33.ru"/>
				<meta property="og:site_name" content="Сайт заказа трансфера автомобилей премиум-класса во Владимире"/>
			</Head>
			<Header activePage={title} data={data} />
			<main style={{overflow: 'hidden'}} className={style.main}>
				{ children }
			</main>
			<Footer data={data} />
		</>
	)
}

export default MainLayout

