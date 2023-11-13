
<template>
  <div v-if="item.quantity > 0" class="list-item">
    <v-avatar v-if="item.img" :image="item.img" />
    <div class="list-item__middle ml-4">
      <h3 class="mb-3">{{ item.title }}</h3>
      <input-number v-model="quantity" class="input-number" @add="addToCart(item)" @remove="removeFromCart(item.id)" />
    </div>
    <div class="list-item__end ml-auto" @click="removeAllFromCart(item.id)">
      <v-icon size="large" class="hover material-icons-outlined">delete</v-icon>
    </div>
  </div>
</template>
      
<script setup lang="ts">
import { CartItem } from '@/data/types'
import { useCartStore } from '@/store/cart'
import { computed } from 'vue'
import InputNumber from '@/components/UI/InputNumber.vue'
const { totalPrice, addToCart, removeFromCart, totalItems, removeAllFromCart } = useCartStore()

const props = defineProps({
	item: { type: Object as () => CartItem, required: true },
})

const quantity = computed(() => {
	return props.item.quantity
})

const emits = defineEmits(['add', 'remove']) 
</script>
      
<style scoped lang="scss">
.v-avatar {
  height: 100px !important;
  width: 100px !important;
  border-radius: 16px;
}

.input-number {
  background-color: gainsboro;
  color: black;
}

.list-item {
  display: flex;
  align-items: center;
}
</style>