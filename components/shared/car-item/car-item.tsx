import { FC } from 'react'
import style from './car-item.module.scss'
import Image from 'next/image'
import { Cars } from '../../../types/Cars'
import Link from 'next/link'

interface CarItemTypes {
	cars: Cars[]
	className?: string
	rootPath?: string
}

const CarItem: FC<CarItemTypes> = ({cars, className, rootPath}) => {

	return (
		<>
			<ul className={`${style.list} ${className}`}>
				{
					cars.map(car => {
						return (
							<li className={style.item} key={car.id}>
								<Link href={`${rootPath}/${car.link}`}>
									<a className={style.link}>
										<div className={style.img}>
											<Image src={car.img} alt={car.title} placeholder="blur"/>
											<span className={style.name}>{car.title}</span>
										</div>
									</a>
								</Link>
							</li>
						)
					})
				}
			</ul>
		</>
	)
}

export default CarItem
