<template>
  <v-container>
    <div class="main mt-6">
      <h2>History of orders</h2>
      <div class="orders-list mt-8">
        <template v-for="(order, index) in orders" :key="index">
          <HistoryItem :order="order" />
        </template>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import HistoryItem from '@/components/cards/HistoryItem.vue'
import { orders } from '@/data/orders'
</script>

<style scoped>
.main {
    position: relative;
    width: 100%;
    max-width: 720px;
    padding: 0 24px;
    margin: 0 auto;
}

.orders-list {
    display: flex;
    flex-direction: column-reverse;
    gap: 32px;
}
</style>