<template>
  <v-container>
    <div class="main">
      <div class="content-block mt-3">
        <div class="content-block__header mb-8">
          <h2>Cart</h2>
          <v-icon class="hover" @click="clear()">delete</v-icon>
        </div>
        <v-divider class="mb-3" />

        <div class="content-block__main">
          <div class="menu">
            <cart-list v-if="totalItems() > 0" :items="items" />
            <div v-else>Cart is empty</div>
          </div>
        </div>

        <div class="content-block__footer mt-12">
          <div class="d-flex align-center">
            <h3 class="ml-auto mr-8">Order amount: </h3>
            <h2>{{ totalPrice() }} $</h2>
          </div>
          <div class="actions d-flex mt-8">
            <v-btn prepend-icon="arrow_back_ios" color="grey" class="mr-auto" @click="router.push({ name: 'home' })">Back to menu</v-btn>
            <v-btn :disabled="totalItems() < 1" color="primary" @click="router.push( { name: 'ordering' })">To confirming order</v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'
import CartList from '@/components/cards/CartList.vue'
import { useRouter } from 'vue-router'

const { items, clearCart, totalItems, totalPrice } = useCartStore()

const router = useRouter()
const clear = () => {
	clearCart()
	router.push({ name: 'home' })
}
</script>

<style scoped lang="scss">
.v-container {
  .main {
    .content-block {
      width: 650px;
      margin: 0 auto;
      .content-block__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      }
    }
  }
    
}
</style>