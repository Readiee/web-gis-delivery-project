
<template>
  <div v-for="item in props.items" :key="item.id" class="cart-list">
    <template v-if="item.quantity > 0">
      <cart-list-item class="mt-4" :item="item" />
      <v-divider class="mt-4" />
    </template>
  </div>
</template>
      
<script setup lang="ts">
import { CartItem } from '@/data/types'
import CartListItem from '@/components/cards/CartListItem.vue'

const props = defineProps({
	items: { type: Array as () => CartItem[], required: true }
})
</script>
      
<style scoped lang="scss">
.cart-list {
}

.item {
}
</style>