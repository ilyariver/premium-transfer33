import { FC } from 'react'
import style from './about-page.module.scss'
import { About } from '../../../../types/about'
import Breadcrumbs from '../../../shared/breadcrumbs/breadcrumbs'
import WriteToUs from '../../../shared/write-to-us/write-to-us'

interface AboutTypes {
	aboutInfo: About
}

const AboutPage: FC<AboutTypes> = ({ aboutInfo }) => {
	console.log(aboutInfo)
	if (!aboutInfo) return null
	const {
		title,
		description,
		director,
		mission,
		numberOrders
	} = aboutInfo.aboutCompany

	return (
		<section className={style.section}>
			<div className="container">
				<Breadcrumbs pagesName={[title]} className={style.breadcrumbs}/>
				<h1 className={style.title}>
					{title}
				</h1>
				<div className={style.description} dangerouslySetInnerHTML={{__html: description}}></div>
				<div className={style.director_info}>
					<div className={style.director_name} dangerouslySetInnerHTML={{__html: director.name}}></div>
					<div className={style.achievements} dangerouslySetInnerHTML={{__html: director.about}}></div>
				</div>
				<div className={style.mission_wrap}>
					<div className={style.mission} dangerouslySetInnerHTML={{__html: mission}}></div>
					<div className={style.number_orders}>
						<div className={style.number}>{numberOrders.number}</div>
						<div className={style.orders_text}>выполненных<br />заказов</div>
					</div>
				</div>
				<WriteToUs />
			</div>
		</section>
	)
}

export default AboutPage
