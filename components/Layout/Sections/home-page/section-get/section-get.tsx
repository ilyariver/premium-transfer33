import style from './section-get.module.scss'
import square from '../../../../../public/images/icons/square.svg'

const SectionGet = () => {
	return (
		<section className={style.section}>
			<div className="container">
				<h2 className={style.title}>Что вы получаете, если выберите нас:</h2>
				<ul className={style.list} style={{listStyleImage: `url(${square.src})`}}>
					<li className={style.item}>
						<div className={style.text}>
							Каждая машина создаст атмосферу уюта: мягкие кожаные кресла позволяют удобно
							расположиться,  идеальная шумоизоляция — расслабиться и посвятить время приятной беседе.
							Остановки на маршруте предполагают, что гости смогут в полной мере насладиться
							достопримечательностями, даже по пути в отель.
						</div>
					</li>
					<li className={style.item}>
						<div className={style.text}>
							Собираясь в путешествие или встречая гостей, закажите элитный автомобиль, чтобы
							добраться до или из аэропорта. В Premium Transfer33 осуществляется круглосуточная
							доставка автомобилей. К тому же встреча на вокзале, благодаря премиальному авто,
							станет еще более приятным сюрпризом.
						</div>
					</li>
					<li className={style.item}>
						<div className={style.text}>
							Неизменно вежливый водитель выполнит пожелания, составит оптимальный маршрут поездки,
							настроит благоприятную температуру салона, поставит музыку с учетом Ваших пристрастий
							и, конечно, поможет с багажом. Как такси. Только лучше.
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default SectionGet
