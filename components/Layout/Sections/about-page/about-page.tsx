import { FC } from 'react'
import { About } from '../../../../types/about'
import style from './about-page.module.scss'

const AboutPage: FC<About> = ({
	aboutPageDescription,
	directorName,
	aboutDirector,
  	companyMission,
	numberOrders}) => {

	return (
		<div className="container">
			<div className={style.description} dangerouslySetInnerHTML={{ __html: aboutPageDescription }} />
			<div className={style.director_info}>
				<div className={style.director_name} dangerouslySetInnerHTML={{ __html: directorName }} />
				<div className={style.achievements} dangerouslySetInnerHTML={{ __html: aboutDirector }} />
			</div>
			<div className={style.mission_wrap}>
				<div className={style.mission} dangerouslySetInnerHTML={{ __html: companyMission }} />
				<div className={style.number_orders}>
					<div className={style.number}>{numberOrders}</div>
					<div className={style.orders_text}>выполненных<br />заказов</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
