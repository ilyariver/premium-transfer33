import { FC } from 'react'
import style from './section-list-advantages.module.scss'
import { ThirdScreen } from '../../../../../types/third-screen'

interface SectionListAdvantagesTypes {
	data: ThirdScreen
}

const SectionListAdvantages: FC<SectionListAdvantagesTypes> = ({ data }) => {
	const { advantagesList, advantagesTitle, advantagesImg } = data

	return (
		<section className={style.section}>
			<div className="container">
				<h2 className={style.title}>
					<span dangerouslySetInnerHTML={{ __html: advantagesTitle }}  />
				</h2>
			</div>
				<div className={style.img_content}>
					<div className={`container ${style.container}`}>
						<div className={style.img} style={{backgroundImage: `url(${advantagesImg})`}} aria-label={advantagesTitle} />
					</div>
					<div className="container">
						<ul className={style.list}>
							{advantagesList.map((item) => (
								<li key={item.name} className={style.item}>
									<div className={style.icon} aria-label="Иконка" style={{backgroundImage: `url(${item.icon})`}} />
									<div className={style.text}>{ item.name }</div>
								</li>))
							}
						</ul>
					</div>
				</div>
		</section>
	)
}

export default SectionListAdvantages
