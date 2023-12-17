import { CartItem } from '@/data/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
	const items = ref<CartItem[]>([])
	
	function itemCount(itemId) {
		const item = items.value.find((i) => i.id == itemId)
		return item ? item.quantity : 0
	}

	function totalItems() {
		return items.value.reduce((total, item) => total + item.quantity, 0)
	}

	function totalPrice() {
		return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
	}

	function addToCart(item) {
		const existingItem = items.value.find((i) => i.id === item.id)
		if (existingItem) {
			existingItem.quantity++
		} else {
			items.value.push({ ...item, quantity: 1 })
		}
	}

	function removeFromCart(itemId) {
		const item = items.value.find((i) => i.id == itemId)
		if (item) {
			item.quantity -= 1
			if (item.quantity == 0) {
				items.value = items.value.filter((i) => i.id != itemId)
			}
		}
	}

	function removeAllFromCart(itemId) {
		const item = items.value.find((i) => i.id == itemId)
		if (item) {
			item.quantity = 0
			items.value = items.value.filter((i) => i.id != itemId)
		}
	}

	function clearCart() {
		items.value = []
	}

	return {
		items,
		totalItems,
		totalPrice,
		addToCart,
		removeFromCart,
		clearCart,
		itemCount,
		removeAllFromCart
	}
})
