import { FC } from 'react'
import style from './section-fleet.module.scss'
import Breadcrumbs from '../../../../shared/breadcrumbs/breadcrumbs'
import CarItem from '../../../../shared/car-item/car-item'
import { Cars } from '../../../../../types/Cars'
import WriteToUs from '../../../../shared/write-to-us/write-to-us'

interface SectionFleetTypes {
	pageName: string
	carsPark: Cars[]
	rootPath: string
}

const SectionFleet: FC<SectionFleetTypes> = ({pageName, carsPark, rootPath}) => {
	let pages: string[] = []
	pages.push(pageName)

	return (
		<section className={style.section}>
			<div className="container">
				<Breadcrumbs pagesName={pages} className={style.breadcrumbs}/>
				<div className={style.content}>
					<h1 className={style.title}>
						автопарк <span>PREMIUM TRANSFER 33</span>
					</h1>
					<CarItem cars={carsPark} className={style.cars} rootPath={rootPath}/>
					<WriteToUs />
				</div>
			</div>
		</section>
	)
}

export default SectionFleet
