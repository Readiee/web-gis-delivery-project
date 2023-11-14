import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuthStore } from '@/store/auth'
import { Order } from '@/data/types'
import { useCartStore } from '@/store/cart'

const { user } = useAuthStore()
const { items, totalPrice } = useCartStore()

export const useOrderingStore = defineStore('ordering', () => {
	const order = ref<Order>({
		user: user,
		phone: user.phone,
		address: user.address,
		items: items,
		comment: '',
		payMethod: '',
		delieveryPrice: 3,
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

	function setDeliveryPrice(delieveryPrice: number) {
		order.value.delieveryPrice = delieveryPrice
	}

	function orderAmount() {
		return totalPrice() + order.value.delieveryPrice
	}

	return {
		order,
		setAddress,
		setComment,
		setDeliveryPrice,
		setPayMethod,
		orderAmount,
	}
})

