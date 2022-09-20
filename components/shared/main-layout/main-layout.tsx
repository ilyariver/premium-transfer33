import { FC } from 'react'
import { LayoutTypes } from '../../../types/layout-types'
import Head from 'next/head'

const MainLayout: FC<LayoutTypes> = ({children, title}) => {
	return (
		<>
			<Head>
				<title>{title} | Premium Transfer 33</title>
			</Head>
			<main>
				{ children }
			</main>
		</>
	)
}

export default MainLayout
