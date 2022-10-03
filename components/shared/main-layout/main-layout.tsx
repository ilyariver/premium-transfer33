import { FC, useEffect, useState } from 'react'
import { LayoutTypes } from '../../../types/layout-types'
import style from './main.module.scss'
import Head from 'next/head'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { DataTypes } from '../../../types/Data'

const MainLayout: FC<LayoutTypes> = ({children, title}) => {
	const [data, setData] = useState<DataTypes>()

	const getData = async () => {
		const res = await fetch(`https://premium-transfer33-469d.vercel.app/api/data`)
		const data = await res.json()
		console.log(data)
		setData(data)
	}

	useEffect(() => {
		getData()
	},[])

	return (
		<>
			<Head>
				<title key="title">{`${title} ${data?.title ? data?.title : '|PT33'}`}</title>
			</Head>
			<Header activePage={title} data={data?.header} />
			<main style={{overflow: 'hidden'}} className={style.main}>
				{ children }
			</main>
			<Footer data={data?.footer} />
		</>
	)
}

export default MainLayout

