import { FC } from 'react'
import { LayoutTypes } from '../../../types/layout-types'
import style from './root-section.module.scss'
import Breadcrumbs from '../breadcrumbs/breadcrumbs'
import MainTitle from '../main-title/main-title'

const RootSection: FC<LayoutTypes> = ({children, pageTitle, pages}) => {
	if (!pageTitle) return null

	return (
		<>
			<section className={style.section}>
				<div className="container">
					<Breadcrumbs pagesName={pages} className={style.breadcrumbs} parentLink={''}/>
				</div>
				<div className={style.content}>
					<div className="container">
						<MainTitle pageTitle={pageTitle} />
					</div>
					{ children }
				</div>
			</section>
		</>
	)
}

export default RootSection

