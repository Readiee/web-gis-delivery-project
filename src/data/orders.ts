import { Order } from '@/data/types'

export const orders: Order[] = [
	{ 
		id: 1,
		user: { id: 1, 
			name: 'Bulat',
			phone: '12345',
			address: {
				city: '',
				house_number: '',
				road: '',
				building: '',
				entrance: '',
				floor: '',
				flat: '',
				comment: ''
			} },
		items: [
			{
				id: 1,
				title: 'CheeseBurger',
				price: 2,
				quantity: 2,
				img: '' 
			},
			{
				id: 2,
				title: 'Cola',
				price: 1,
				quantity: 3,
				img: '' 
			},
		],
		address: {
			city: '',
			house_number: '',
			road: '',
			building: '',
			entrance: '',
			floor: '',
			flat: '',
			comment: ''
		},
		phone: '12345',
		comment: 'abcd',
		payMethod: 'Credit card',
		delieveryPrice: 3,
		date: new Date(),
	},

	{ 
		id: 2,
		user: { id: 1, 
			name: 'Bulat',
			phone: '12345',
			address: {
				city: '',
				house_number: '',
				road: '',
				building: '',
				entrance: '',
				floor: '',
				flat: '',
				comment: ''
			} },
		items: [
			{
				id: 1,
				title: 'HumBurger',
				price: 2,
				quantity: 2,
				img: '' 
			},
			{
				id: 2,
				title: 'Fanta',
				price: 1,
				quantity: 3,
				img: '' 
			},
		],
		address: {
			city: '',
			house_number: '',
			road: '',
			building: '',
			entrance: '',
			floor: '',
			flat: '',
			comment: ''
		},
		phone: '12345',
		comment: 'abcd',
		payMethod: 'Credit card',
		delieveryPrice: 3,
		date: new Date(),
	}
]