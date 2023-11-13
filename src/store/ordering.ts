import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuthStore } from '@/store/auth'
import { Order } from '@/data/types'
import { useCartStore } from '@/store/cart'

const { user } = useAuthStore()
const { items } = useCartStore()

export const useOrderingStore = defineStore('ordering', () => {
	const order = ref<Order>({
		user: user,
		phone: user.phone,
		address: user.address,
		items: items,
		comment: '',
		payMethod: ''
	})
	
	function setAddress(address: string) {
		order.value.address = address
	}

	function setComment(comment: string) {
		order.value.comment = comment
	}

	function setPayMethod([payMethod]: string) {
		order.value.payMethod = payMethod
	}

	return {
		order,
		setAddress,
		setComment,
		setPayMethod
	}
})

