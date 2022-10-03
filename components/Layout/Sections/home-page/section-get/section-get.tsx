import { FC } from 'react'
import style from './section-get.module.scss'
import { WhatGet } from '../../../../../types/what-get'

interface GetsTypes {
	data: WhatGet
}

const SectionGet: FC<GetsTypes> = ({ data }) => {
	const { title, textList } = data

	return (
		<section className={style.section}>
			<div className="container">
				<h2 className={style.title}><span>{ title }</span></h2>
				<ul className={style.list} style={{listStyleImage: `url(${textList.icon})`}}>
					{textList.list.map((item) => (
						<li className={style.item} key={item}>
							<div className={style.text}>{ item }</div>
						</li>))
					}
				</ul>
			</div>
		</section>
	)
}

export default SectionGet
