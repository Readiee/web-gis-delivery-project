<template>
  <v-card>
    <h3>Order: <span class="text--primary">{{ order.id }}</span></h3>
    <p class="font-weight-bold grey">{{ date }}</p>

    <v-divider class="my-4" />

    <template v-for="item in order.items" :key="item">
      <div class="order-items__item">
        <h4>{{ item.title }}</h4>
        <h4 class="ml-4">x{{ item.quantity }}</h4>
        <h4>{{ item.quantity * item.price }}$</h4>
      </div>
    </template>

    <v-divider class="my-4" />

    <div class="order-items__item">
      <h4>Delievery</h4>
      <h4 />
      <h4>{{ order.delieveryPrice }}$</h4>
    </div>

    <v-divider class="my-4" />

    <div class="order-items__item">
      <h4>Order amount</h4>
      <h4 />
      <h4>{{ orderAmount }}$</h4>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { Order } from '@/data/types'
import { computed } from 'vue'

const props = defineProps({
	order: { type: Object as () => Order, required: true  }
})

const date = computed(() => {
	return + '' + formatDateTime(props.order.date)
})

const orderAmount = computed(() => {
	return props.order.items.reduce((total, item) => total + item.price * item.quantity, 0) + props.order.delieveryPrice
})

function formatDateTime(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	}
	return date.toLocaleString('en-GB', options)
}

</script>

<style scoped lang="scss">
.order-items__item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  width: 100
  p {
    margin-top: 6px;
  }
        
  *:last-child {
  margin-left: auto;
  }
}
</style>