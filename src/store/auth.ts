import { User } from '@/data/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: {
			id: 0,
			name: '',
			phone: '',
			address: ''
		} as User,
		loggedIn: ref(false)
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
			useAuthStore().user.address = ''
			useAuthStore().loggedIn = true

		},
  
		logout: () => {
			useAuthStore().user.id = 0
			useAuthStore().user.name = ''
			useAuthStore().user.phone = ''
			useAuthStore().user.address = ''
			useAuthStore().loggedIn = false
		},
	},
})
