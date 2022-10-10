import { FC } from 'react'
import style from './section-get.module.scss'
import { WhatGet } from '../../../../../types/what-get'

interface GetsTypes {
	data: WhatGet
}

const SectionGet: FC<GetsTypes> = ({ data }) => {
	const { whatTitle, whatList } = data

	return (
		<section className={style.section}>
			<div className="container">
				<h2 className={style.title}><span>{ whatTitle }</span></h2>
				<ul className={style.list} >
					{whatList.map((item) => (
						<li className={style.item} key={item.whatItem}>
							<div className={style.text}>{item.whatItem}</div>
						</li>))
					}
				</ul>
			</div>
		</section>
	)
}

export default SectionGet
