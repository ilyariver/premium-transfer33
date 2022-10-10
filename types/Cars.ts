export interface Cars {
	title: string
	parentPage: string
	pageTitle: string
	sectionTitle: string
	park: Park[]
}

export interface Park {
	title: string
	link: string
	img: string
	imgPage: string
	car1: string
	car2: string
	car3: string
	description: string
	specifications: string
	specificationsList: {
		specificationsItem: string
	}[]
	text: string
	rentTitle: string
	rentstList: rentService[]
}

export interface rentService {
	title: string
	cost: string
}
