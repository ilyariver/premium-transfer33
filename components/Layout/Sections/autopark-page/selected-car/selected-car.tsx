import { FC } from 'react'
import style from './selected-car.module.scss'
import Breadcrumbs from '../../../../shared/breadcrumbs/breadcrumbs'
import ScrollDown from '../../../../shared/scroll-down/scroll-down'
import Link from 'next/link'

interface SelectedCarItem {
	pageName: string | string[] | undefined
	car: any
	parentLink: string
}

const SelectedCar: FC<SelectedCarItem> = ({pageName, car, parentLink}) => {
	let pages: string[] = ['автопарк']
	if (typeof pageName === 'string') {
		pages.push(car.title)
	}

	return (
		<>
			<section className={style.section_main} style={{backgroundImage: `url(${car.imgPage})`}}>
				<div className="container">
					<Breadcrumbs pagesName={pages} className={style.breadcrumbs} parentLink={parentLink}/>
				</div>
				<div className={style.scrollIcon}>
					<ScrollDown />
				</div>
			</section>
			<section className={style.section_gallery}>
				<div className="container">
					<h1 className={style.title} dangerouslySetInnerHTML={
						{
							__html: `<span>аренда ${ car.title || 'автомобиля' }</span>`
						}
					}/>
					<div className={style.button_wrap}>
						<Link href="/#orderForm">
							<a className={style.button}>забронировать</a>
						</Link>
					</div>
					<div className={style.gallery}>
						<div className={`${style.car} ${style.main}`} style={{backgroundImage: `url(${car.car1})`}}> </div>
						<div className={style.gallery_wrap}>
							<div className={style.car} style={{backgroundImage: `url(${car.car2})`}}> </div>
							<div className={style.car} style={{backgroundImage: `url(${car.car3})`}}> </div>
						</div>
					</div>
					<p className={style.description}>
						{ car.description }
					</p>
					<h2 className={style.title} dangerouslySetInnerHTML={
						{
							__html: `<span>Характеристики ${ car.title || 'автомобиля' }</span>`
						}
					}/>
					<ul className={style.list} style={{listStyleImage: `url(${car.specifications})`}}>
						{
							car.specificationsList.map((specification: any, idx: number) => {
								return <li key={idx} className={style.item}>{ specification.specificationsItem }</li>
							})
						}
					</ul>
					<p className={style.description}>{car.text}</p>
					<h2 className={style.title}><span>{ car.rentTitle }</span></h2>
					<ul className={style.rent_list}>
						{
							car.rentstList.map((rent: any) => {
								return <li key={rent.title} className={style.rent_item}>
									<div className={style.name}>{ rent.title }</div>
									<span> </span>
									<div className={style.cost}>{ rent.cost }</div>
								</li>
							})
						}
					</ul>
				</div>
			</section>
		</>
	)
}

export default SelectedCar
