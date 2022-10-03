import { DataTypes } from '../../../types/Data'

export const data: DataTypes = {
	title: '| PREMIUM TRANSFER33',
	header: {
		title: 'Хедер',
		link: '/',
		logo: {
			img: '/images/logo.png',
			alt: 'логотип'
		},
		top: {
			orderBtn: {
				name: 'Оставить заявку',
				link: '/#orderForm',
			},
			listContacts: [
				{
					icon: '/images/icons/call.svg',
					connection: '+7 999 999 99 99',
					link: 'tel:+79999999999'
				},
				{
					icon: '/images/icons/icon-mail.svg',
					connection: 'mail@mail.com',
					link: 'mailto:mail@mail.com'
				},
			]
		},
		bottom: {
			left: [
				{name: 'Главная', link: '/'},
				{name: 'Автопарк', link: '/autopark'},
			],
			right: [
				{name: 'Контакты', link: '/contacts'},
				{name: 'О нас', link: '/about'},
			]
		}
	},
	footer: {
		title: 'Футер',
		link: '/',
		logo: {
			img: '/images/logo.png',
			alt: 'логотип'
		},
		navList: [
			{ name: 'главная', link: '/'},
			{ name: 'автопарк', link: '/autopark'},
			{ name: 'контакты', link: '/contacts'},
			{ name: 'услуги', link: '/#benefits'},
			{ name: 'о нас', link: '/about'},
			{ name: 'заявка', link: '/#orderForm'},
		],
		contactsList: [
			{
				icon: '/images/icons/location.svg',
				name: 'г. Владимир, ул. Красивых<br />Молдавских Партизан,<br />строение 20, д. 65',
				link: '#'
			},
			{
				icon: '/images/icons/phone.svg',
				name: '+7 999 999 99 99',
				link: 'tel:+79999999999'
			},
			{
				icon: '/images/icons/whatsapp.svg',
				name: 'Напишите нам в Whatsapp',
				link: '#'
			},
		],
		copyright: '© Все права защищены'
	},
	firstScreen: {
		backgroundImage: '/images/dark-auto.jpg',
		buttonText: 'забронировать',
		hasScroll: true
	},
	secondScreen: {
		title: 'Наша компания <span>Premium&nbsp;Transfer&nbsp;33</span><br />предоставляет трансферные услуги на машинах<br />бизнес-класса:',
		benefitsList: [
			{ back: '/images/oval2.svg', img: '/images/audiQ3.png', title: 'Трансфер в любой <br/> город России' },
			{ back: '/images/oval2.svg', img: '/images/audiQ3right.png', title: 'Свадебные кортежи' },
			{ back: '/images/oval3.png', img: '', title: 'Деловые поездки' },
			{ back: '/images/oval2.svg', img: '/images/vito.png', title: 'Сопровождение и<br>обслуживание делегаций,<br>экономических форумов' },
		]
	},
	thirdScreen: {
		title: 'Поездки с <span>Premium&nbsp;Transfer&nbsp;33</span> -&nbsp;это:',
		img: '/images/1.jpg',
		advantagesList: [
			{ icon: '/images/icons/tie.svg', name: 'Здесь будет текст преимуществ компании перед конкруентами' },
			{ icon: '/images/icons/time.svg', name: 'Повседневная практика показывает, что убеждённость некоторых оппонентов.' },
			{ icon: '/images/icons/car.svg', name: 'Убеждённость некоторых оппонентов создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса.' },
			{ icon: '/images/icons/fast.svg', name: 'А тут будет текст о том, что все водители имеют колосальный опыт и тд' },
		]
	},
	formScreen: {
		title: 'Вы можете оставить заявку на бронирование автомобиля',
		text: 'Оставьте свои данные в форме и мы перезвоним вам',
		img: '/images/pattern-luxury.png',
		form: {
			name: 'Имя:',
			tel: 'Телефон:',
			textArea: 'Дополнительная информация:',
			button: 'Забронировать',
		}
	},
	whatGetScreen: {
		title: 'Что вы получаете, если выберите нас:',
		textList: {
			icon: '/images/icons/square.svg',
			list: [
				'Каждая машина создаст атмосферу уюта: мягкие кожаные кресла позволяют удобно расположиться,  идеальная ' +
				'шумоизоляция — расслабиться и посвятить время приятной беседе. Остановки на маршруте предполагают, ' +
				'что гости смогут в полной мере насладиться достопримечательностями, даже по пути в отель.',
				'Собираясь в путешествие или встречая гостей, закажите элитный автомобиль, чтобы добраться ' +
				'до или из аэропорта. В Premium Transfer33 осуществляется круглосуточная доставка автомобилей. ' +
				'К тому же встреча на вокзале, благодаря премиальному авто, станет еще более приятным сюрпризом.',
				'Неизменно вежливый водитель выполнит пожелания, составит оптимальный маршрут поездки, настроит ' +
				'благоприятную температуру салона, поставит музыку с учетом Ваших пристрастий и, конечно, поможет ' +
				'с багажом. Как такси. Только лучше.'
			]
		}
	},
	cars: {
		title: 'Автопарк',
		parentPage: '/autopark',
		pageTitle: 'автопарк <span style="color: #FFB800">Premium&nbsp;Transfer&nbsp;33</span>',
		sectionTitle: 'Наш парк автомобилей',
		park: [
			{
				id: 1,
				title: 'Vito&nbsp;Tourer&nbsp;Mercedes&nbsp;Benz',
				link: 'mercedes-benz-vito',
				img: '/images/vito.jpg',
				imgPage: 'https://www.mentoday.ru/upload/img_cache/608/608cc208ea5287f9af9fb746bac4e074_ce_2500x1666x0x1_cropped_666x444.jpg',
				gallery: {
					car1: '/images/vito-front.jpg', car2: '/images/vito-interier.jpg', car3: '/images/vito_wheel.jpg',
				},
				description: 'За свою долгую историю автомобили БМВ 7 серии перевезли десятки тысяч пассажиров, фамилии ' +
					'которых можно найти в справочниках о воротилах мирового бизнеса и политики. Иметь в своем гараже ' +
					'подобное авто считалось показателем солидности компании или удачного ведения дел ' +
					'предпринимателем. Со временем 7-ая серия стала своеобразным мерилом успеха и знаком ' +
					'высокого автомобильного стиля.',
				specifications: {
					icon: '/images/icons/ellipse-yellow.svg',
					list: [
						'Кожаный салон',
						'Спортивные передние сидения',
						'Кожаная отделка руля',
						'Электрорегулировка сидений',
						'Память передних сидений',
						'Передние электростеклоподъемники',
						'Задние электростеклоподъемники',
						'Кожаный салон',
					],
					text: 'Помимо стали и алюминия при изготовлении автомобиля стал применяться углепластик, который, ' +
						'стал основой для изготовления именно этих элементов, а также крышки багажника. ' +
						'О тщательной проработке аэродинамики свидетельствуют изменившиеся линии обводов капота. ' +
						'В целом чуть увеличившиеся габариты автомобиля не отразились на скорости и динамике ее набора. ' +
						'Этому способствовало уменьшение массы машины почти на 200 кг.',
				},
				rent: {
					title: 'Тарифы на аренду',
					service: [
						{title: 'Международный трансфер:', cost: 'от 5000 ₽'},
						{title: 'Свадьба:', cost: 'от 5000 ₽ - 1час / мин - 4 часа'},
						{title: 'Сопровождение по городу: ', cost: '1800 ₽ - 1час'},
					]
				}
			},
			{
				id: 2,
				title: 'Audi&nbsp;Q3',
				link: 'audi-q3',
				img: '/images/q3.jpg',
				imgPage: 'https://s1.1zoom.ru/b5575/306/Audi_2019_Q3_Sportback_45_TFSI_quattro_S_line_569689_2560x1440.jpg ',
				gallery: {
					car1: 'https://www.autofacil.es/wp-content/uploads/2021/05/audi-sportback.jpg',
					car2: 'https://cdn.motor1.com/images/mgl/AkkOZW/s3/prueba-audi-q3-sportback-s-line-35-tdi-s-tronic.jpg',
					car3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFepnn6fXeevWlBkMaOD-IOc17s-9HKwagw&usqp=CAU',
				},
				description: 'Внешний вид передней части модели Audi Q3 Sportback формируют внушительная решетка ' +
					'радиатора Singleframe и боковые воздухозаборники. Фары и задние блоки фонарей визуально объединены ' +
					'плечевой линией и представляют собой единый дизайнерский элемент. Модель предлагается в ' +
					'трех комплектациях: базовой, расширенной и S line. Для окраски кузова составлена линейка из 11 ' +
					'цветов, в числе которых оранжевый цвет Pulse Orange и синий цвет Turbo Blue. Ассортимент дисков ' +
					'включает в себя версии различного дизайна с посадочным диаметром от 17 до 20 дюймов.',
				specifications: {
					icon: '/images/icons/ellipse-yellow.svg',
					list: [
						'Кожаный салон',
						'Спортивные передние сидения',
						'Кожаная отделка руля',
						'Электрорегулировка сидений',
						'Память передних сидений',
						'Передние электростеклоподъемники',
						'Задние электростеклоподъемники',
						'Кожаный салон',
					],
					text: 'Система Audi drive select позволяет подобрать параметры работы систем и агрегатов автомобиля ' +
						'под ситуацию движения, дорожные условия и собственные предпочтения. На выбор доступно шесть ' +
						'режимов, включая комфортный, экономичный и спортивный.',

				},
				rent: {
					title: 'Тарифы на аренду',
					service: [
						{title: 'Международный трансфер:', cost: 'от 5000 ₽'},
						{title: 'Свадьба:', cost: 'от 5000 ₽ - 1час / мин - 4 часа'},
						{title: 'Сопровождение по городу: ', cost: '1800 ₽ - 1час'},
					]
				}
			},
			{
				id: 3,
				title: 'Mercedes-Benz&nbsp;ML&nbsp;63&nbsp;AMG',
				link: 'mercedes-benz-ml-63',
				img: '/images/Mercedes-ML-631.jpg',
				imgPage: 'https://c4.wallpaperflare.com/wallpaper/123/934/493/cars-mercedes-wallpaper-preview.jpg',
				gallery: {
					car1: 'https://c4.wallpaperflare.com/wallpaper/730/768/968/mercedes-benz-mercedes-amg-x166-wallpaper-preview.jpg',
					car2: 'https://avtobak.net/wp-content/uploads/2017/01/Mercedes-Benz-GL-Class-350-CDI-Executive-925642915-2069255-2.jpg',
					car3: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001609cff569528328d08d564ba2c2f/cattouch',
				},
				description: 'За свою долгую историю автомобили БМВ 7 серии перевезли десятки тысяч пассажиров, фамилии ' +
					'которых можно найти в справочниках о воротилах мирового бизнеса и политики. Иметь в своем гараже ' +
					'подобное авто считалось показателем солидности компании или удачного ведения дел ' +
					'предпринимателем. Со временем 7-ая серия стала своеобразным мерилом успеха и знаком ' +
					'высокого автомобильного стиля.',
				specifications: {
					icon: '/images/icons/ellipse-yellow.svg',
					list: [
						'Кожаный салон',
						'Спортивные передние сидения',
						'Кожаная отделка руля',
						'Электрорегулировка сидений',
						'Память передних сидений',
						'Передние электростеклоподъемники',
						'Задние электростеклоподъемники',
						'Кожаный салон',
					],
					text: 'Помимо стали и алюминия при изготовлении автомобиля стал применяться углепластик, который, ' +
						'стал основой для изготовления именно этих элементов, а также крышки багажника. ' +
						'О тщательной проработке аэродинамики свидетельствуют изменившиеся линии обводов капота. ' +
						'В целом чуть увеличившиеся габариты автомобиля не отразились на скорости и динамике ее набора. ' +
						'Этому способствовало уменьшение массы машины почти на 200 кг.'
				},
				rent: {
					title: 'Тарифы на аренду',
					service: [
						{title: 'Международный трансфер:', cost: 'от 5000 ₽'},
						{title: 'Свадьба:', cost: 'от 5000 ₽ - 1час / мин - 4 часа'},
						{title: 'Сопровождение по городу: ', cost: '1800 ₽ - 1час'},
					]
				}
			},
			{
				id: 4,
				title: 'Toyota&nbsp;Land&nbsp;Cruiser&nbsp;200&nbsp;Series',
				link: 'toyota-land-cruiser-200',
				img: '/images/200.jpg',
				imgPage: 'https://s.auto.drom.ru/i24227/c/photos/fullsize/toyota/land_cruiser/toyota_land_cruiser_859089.jpg',
				gallery: {
					car1: 'https://upload.wikimedia.org/wikipedia/commons/b/be/2014_Toyota_Land_Cruiser_%28VDJ200R%29_VX_wagon_%282015-07-09%29_02.jpg',
					car2: 'https://pilot-auto.su/wp-content/uploads/2019/11/Toyota-Land-Cruiser-200_white_primary-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg',
					car3: 'https://auto.vercity.ru/gallery/img/automobiles/Toyota/2014%20Toyota%20Land%20Cruiser%20200%20Brownstone/dl/2014%20Toyota%20Land%20Cruiser%20200%20Brownstone%20002.jpg',
				},
				description: 'За свою долгую историю автомобили БМВ 7 серии перевезли десятки тысяч пассажиров, фамилии ' +
					'которых можно найти в справочниках о воротилах мирового бизнеса и политики. Иметь в своем гараже ' +
					'подобное авто считалось показателем солидности компании или удачного ведения дел ' +
					'предпринимателем. Со временем 7-ая серия стала своеобразным мерилом успеха и знаком ' +
					'высокого автомобильного стиля.',
				specifications: {
					icon: '/images/icons/ellipse-yellow.svg',
					list: [
						'Кожаный салон',
						'Спортивные передние сидения',
						'Кожаная отделка руля',
						'Электрорегулировка сидений',
						'Память передних сидений',
						'Передние электростеклоподъемники',
						'Задние электростеклоподъемники',
						'Кожаный салон',
					],
					text: 'Помимо стали и алюминия при изготовлении автомобиля стал применяться углепластик, который, ' +
						'стал основой для изготовления именно этих элементов, а также крышки багажника. ' +
						'О тщательной проработке аэродинамики свидетельствуют изменившиеся линии обводов капота. ' +
						'В целом чуть увеличившиеся габариты автомобиля не отразились на скорости и динамике ее набора. ' +
						'Этому способствовало уменьшение массы машины почти на 200 кг.'
				},
				rent: {
					title: 'Тарифы на аренду',
					service: [
						{title: 'Международный трансфер:', cost: 'от 5000 ₽'},
						{title: 'Свадьба:', cost: 'от 5000 ₽ - 1час / мин - 4 часа'},
						{title: 'Сопровождение по городу: ', cost: '1800 ₽ - 1час'},
					]
				}
			},
		],
	},
	contactsPage: {
		title: 'Контакты',
		pageTitle: 'Наши контакты',
		contacts: [
			{
				id: 1,
				type: 'Телефон',
				icon: '/images/icons/call-big.svg',
				phone: {
					tel: '+7(4922)33 22 11',
					link: 'tel:+74922332211'
				}
			},
			{
				id: 2,
				type: 'Почта',
				icon: '/images/icons/mail.svg',
				phone: {
					tel: 'pochta@pochta.ru',
					link: 'mailto:pochta@pochta.ru'
				}
			},
			{
				id: 3,
				type: 'Telegram',
				icon: '/images/icons/telegram.svg',
				phone: {
					tel: '@telegram_login',
					link: '@telegram_login'
				}
			},
			{
				id: 4,
				type: 'Whatsapp',
				icon: '/images/icons/whatsapp-big.svg',
				phone: {
					tel: '+7(999)999 99 99',
					link: '+79999999999'
				}
			},
		],
		address: {
			icon: '/images/icons/location.svg',
			text: 'г. Владимир, ул. Красивых Молдавских Партизан, строение 20, д. 65 '
		}
	},
	aboutCompany: {
		title: 'О нас',
		description: 'Рады приветствовать вас <br /> на сайте <span style="color: #FFB800; text-transform: uppercase; ' +
			'font-family: PlayfairDisplay, serif">Premium&nbsp;Transfer&nbsp;33</span>',
		director: {
			name: 'Иванов <br /> Сергей Петрович',
			about: '<p style="margin-bottom: 30px; font-weight: 300;">С 2012 года помогает нашим клиентам комфортно пользоваться услугами компании.</p>' +
				'<p style="margin-bottom: 30px; font-weight: 300;">Генеральный директор Premium Transfer 33, трансферной компании, и тд и тп</p>',
		},
		mission: '<p style="margin-bottom: 30px;font-weight: 300;">Наша миссия - изменить понимание людей о таком понятии, как трансфер автомобилей. Наша цель, ' +
			'чтобы вы не беспокоились о том, как найти машину для трансфера в любую точку РФ. У вас есть мы. ' +
			'Вам всего лишь нужно открыть наш удобный сайт, написать или позвонить нам.</p>' +
			'<p style="margin-bottom: 30px;font-weight: 300;">Решаем любые вопросы: от бронирования автомобилей в любое время суток\n' + 'до поддержки с нашим кол центром. Что-то ' +
			'не подошло или вам понадобилась наша услуга - мы разберемся за вас.</p>' +
			'<p style="font-weight: 300;">У нас большой парк автомобилей премиум класса. Наши водители прошли тщательную  подготовку и проверку и имеют большой опыт ' +
			'вождения. Хорошо знают свою работу и города России.</p>',
		numberOrders: {
			number: 10_500,
			text: 'выполненных заказов'
		}
	},
	writeUs: {
		title: 'Мы на связи',
		text: 'свяжитесь с нами, если хотите узнать больше',
		buttons: [
			{ link: '#', text: 'Написать в whatsapp' },
			{ link: '#', text: 'Написать в telegram' },
		]
	}
}
