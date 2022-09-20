export interface About {
	aboutCompany: Company
}

export interface Company {
	title: string
	description: string
	director: {
		name: string
		about: string
	}
	mission: string
	numberOrders: {
		number: number
		text: string
	}
}
