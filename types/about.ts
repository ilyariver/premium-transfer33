export interface About {
	title: string
	description: string
	director: {
		name: string
		about: string
	}
	mission: string
	numberOrders: {
		number?: number
		text?: string
	}
}
