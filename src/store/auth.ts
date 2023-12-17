import { User } from '@/data/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		// user: {
		// 	id: 0,
		// 	name: '',
		// 	phone: '',
		// 	address: ''
		// } as User,
		// loggedIn: ref(false)

		user: {
			id: 1,
			name: 'Bulat',
			phone: '123932132',
			address: {
				city: 'Krasnoyarsk',
				house_number: '3',
				road: 'Borisova',
				building: '',
				entrance: '',
				floor: '',
				flat: '',
				comment: '',
			}
		} as User,
		loggedIn: ref(true)
	}),
  
	// getters: {
	// 	loggedIn: (state) => {
	// 		return state.user.phone != ''
	// 	},
	// },
  
	actions: {
		login: (name: string, phone: string) => {
			useAuthStore().user.id = 1
			useAuthStore().user.name = name
			useAuthStore().user.phone = phone
			useAuthStore().user.address = {
				city: 'Krasnoyarsk',
				house_number: '3',
				road: 'Borisova',
				building: '',
				entrance: '',
				floor: '',
				flat: '',
				comment: '',
			}
			useAuthStore().loggedIn = true

		},
  
		logout: () => {
			useAuthStore().user.id = 0
			useAuthStore().user.name = ''
			useAuthStore().user.phone = ''
			useAuthStore().user.address = {
				city: '',
				house_number: '',
				road: '',
				building: '',
				entrance: '',
				floor: '',
				flat: '',
				comment: '',
			}
			useAuthStore().loggedIn = false
		},
	},
})
