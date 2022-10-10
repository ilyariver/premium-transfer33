import { FC } from 'react'
import { Cars } from '../../../types/Cars'
import style from './car-item.module.scss'
import Link from 'next/link'

interface CarItemTypes {
	cars: Cars
	className?: string
	rootPath: string
}

const CarItem: FC<CarItemTypes> = ({cars, className, rootPath}) => {
	const { park } = cars

	return (
		<ul className={`${style.list} ${className}`}>
			{
				park.map((car, idx) => {
					return (
						<li className={`${style.item} ${park.length === 3 ? style.numbers : ''}`} key={idx}>
							<Link href={`${rootPath}/${car.link}`}>
								<a className={style.link}>
									<div className={style.img} style={{backgroundImage: `url(${car.img})`}}>
										<span className={style.name} dangerouslySetInnerHTML={{ __html: car.title }} />
									</div>
								</a>
							</Link>
						</li>
					)
				})
			}
		</ul>
	)
}

export default CarItem
