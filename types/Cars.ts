export interface Cars {
	title: string
	parentPage: string
	pageTitle: string
	sectionTitle: string
	park: Park[]
}

export interface Park {
	id: number
	title: string
	link: string
	img: string
	imgPage: string
	gallery: Photos
	description: string
	specifications: {
		icon: string
		list: string[]
		text: string
	}
	rent: {
		title: string
		service: rentService[]
	}
}

interface Photos {
	car1: string
	car2: string
	car3: string
}

export interface rentService {
	title: string
	cost: string
}

export type CarsType = {
	cars: Cars[]
}
