import { FC } from 'react'
import { LayoutTypes } from '../../../types/layout-types'
import style from './main.module.scss'
import useSWR from 'swr'
import Head from 'next/head'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { fetcher } from '../../../common/fetcher'

const MainLayout: FC<LayoutTypes> = ({children, title}) => {

	const { data } = useSWR(`${process.env.API_HOST}/data`, fetcher)

	return (
		<>
			<Head>
				<title key="title">{`${title} ${data?.title ? data.title : '|PT33'}`}</title>
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

