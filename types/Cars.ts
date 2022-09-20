export interface Cars {
	id: number
	title: string
	link: string
	img: any
	gallery: Photos[]
	description: string
	specifications: {
		list: {
			icon: string
			text: string
		}[]
		text: string
	}
	rent: {
		title: string
		service: {
			title: string
			cost: string
		}[]
	}

}

interface Photos {
	id: number
	photo: any
}

export type CarsType = {
	cars: Cars[]
}
