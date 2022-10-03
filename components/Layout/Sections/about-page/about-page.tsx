import { FC } from 'react'
import { About } from '../../../../types/about'
import style from './about-page.module.scss'

const AboutPage: FC<About> = ({description, director, mission, numberOrders}) => {

	return (
		<div className="container">
			<div className={style.description} dangerouslySetInnerHTML={{ __html: description }} />
			<div className={style.director_info}>
				<div className={style.director_name} dangerouslySetInnerHTML={{ __html: director?.name }} />
				<div className={style.achievements} dangerouslySetInnerHTML={{ __html: director?.about }} />
			</div>
			<div className={style.mission_wrap}>
				<div className={style.mission} dangerouslySetInnerHTML={{ __html: mission }} />
				<div className={style.number_orders}>
					<div className={style.number}>{numberOrders?.number}</div>
					<div className={style.orders_text}>выполненных<br />заказов</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
