import { FC } from 'react'
import style from './section-auto-park.module.scss'
import CarItem from '../../../../shared/car-item/car-item'


const SectionAutoPark: FC<any> = ({ cars }) => {

	return (
		<section className={style.section}>
			<div className="container">
				<h2 className={style.title}>Наш парк автомобилей</h2>
				<div className={style.cars}>
					<CarItem cars={cars} />
				</div>
			</div>
		</section>
	)
}

export default SectionAutoPark

