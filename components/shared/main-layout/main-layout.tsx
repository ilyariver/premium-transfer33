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

	const getData = async  () => {
		const response = await fetch(`${url}/wp-json/wp/v2/pages?_embed`)
		const data = await response.json()
		setData(data[2].CFS)
	}

	useEffect(() => {
		getData()
	},[])

	return (
		<>
			<Head>
				<title key="title">{`${title} | PREMIUM TRANSFER33`}</title>
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

