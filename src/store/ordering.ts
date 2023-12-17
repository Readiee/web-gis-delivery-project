import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuthStore } from '@/store/auth'
import { Order } from '@/data/types'
import { useCartStore } from '@/store/cart'
import { Address } from '@/data/types'

const { user } = useAuthStore()
const { items, totalPrice } = useCartStore()

export const useOrderingStore = defineStore('ordering', () => {
	const order = ref<Order>({
		id: 0,
		user: user,
		phone: user.phone,
		address: user.address,
		items: items,
		comment: '',
		payMethod: 'Credit card',
		delieveryPrice: 3,
		date: new Date()
	})

	function setAddress(address: Address) {
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

	function getOrder () {
		return {
			id: order.value.id,
			user: order.value.user,
			phone: order.value.phone,
			address: order.value.address,
			items: order.value.items,
			comment: order.value.comment,
			payMethod: order.value.payMethod,
			delieveryPrice: order.value.delieveryPrice,
			date: order.value.date,	
		}
	}

	return {
		order,
		setAddress,
		setComment,
		setDeliveryPrice,
		setPayMethod,
		orderAmount,
		resetOrder,
		getOrder
	}
})

