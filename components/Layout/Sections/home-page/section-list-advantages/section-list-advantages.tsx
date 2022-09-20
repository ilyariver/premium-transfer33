import style from './section-list-advantages.module.scss'
import driver from '../../../../../public/images/1.jpg'
import tie from '../../../../../public/images/icons/tie.svg'
import time from '../../../../../public/images/icons/time.svg'
import car from '../../../../../public/images/icons/car.svg'
import fast from '../../../../../public/images/icons/fast.svg'


const SectionListAdvantages = () => {
	return (
		<section className={style.section}>
			<div className="container">
				<h2 className={style.title}>Поездки с <span>Premium Transfer33</span> - это:</h2>
				<div className={style.img_content}>
					<div className={style.img} style={{backgroundImage: `url(${driver.src})`}} aria-label="Фото водителя"> </div>
					<ul className={style.list}>
						<li className={style.item}>
							<div className={style.icon} aria-label="Иконка" style={{backgroundImage: `url(${tie.src})`}}> </div>
							<div className={style.text}>Здесь будет текст преимуществ компании
								перед конкруентами</div>
						</li>
						<li className={style.item}>
							<div className={style.icon} aria-label="Иконка" style={{backgroundImage: `url(${time.src})`}}> </div>
							<div className={style.text}>Повседневная практика показывает, что убеждённость некоторых оппонентов.</div>
						</li>
						<li className={style.item}>
							<div className={style.icon} aria-label="Иконка" style={{backgroundImage: `url(${car.src})`}}> </div>
							<div className={style.text}>Убеждённость некоторых оппонентов создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса.</div>
						</li>
						<li className={style.item}>
							<div className={style.icon} aria-label="Иконка" style={{backgroundImage: `url(${fast.src})`}}> </div>
							<div className={style.text}>А тут будет текст о том, что все водители
								имеют колосальный опыт и тд</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default SectionListAdvantages
