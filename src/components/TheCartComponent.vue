<template>
  <v-card width="500" :elevation="3">
    <template v-if="totalItems() != 0">
      <v-list>
        <template v-for="item in items" :key="item.id">
          <div v-if="item.quantity > 0" class="list-item mb-4 d-flex align-center">
            <v-avatar v-if="item.img" :image="item.img" size="100" style="border-radius: 20px;" />
            <div class="list-item__middle ml-4">
              <h3 class="mb-3 font-weight-bold" style="line-height: 1.4rem;">{{ item.title }}</h3>
              <input-number v-model="item.quantity" style="background-color: gainsboro; color: black;" @add="addToCart(item)" @remove="removeFromCart(item.id)" />
            </div>
            <div class="list-item__end ml-auto" @click="removeAllFromCart(item.id)">
              <v-icon size="large" class="hover material-icons-outlined">delete</v-icon>
            </div>
          </div>
        </template>

        <v-divider class="my-4" />

        <div class="d-flex align-center font-weight-bold">
          <h3>Order amount: </h3>
          <h2 class="ml-auto ">{{ totalPrice().toFixed(2) }} $</h2>
        </div>

        <div>
          <v-btn style="width: 100%; margin-top: 15px;" @click="router.push({ name: 'cart' }); emit('closeDialog')">Make the order</v-btn>
        </div>
      </v-list>  
    </template>

    <template v-else>
      <MediaCard title="Cart is empty" caption="Add something from the menu" img="src/assets/images/empty_cart_image.svg" />
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'
import InputNumber from '@/components/UI/InputNumber.vue'
import MediaCard from '@/components/UI/MediaCard.vue'
import { useRouter } from 'vue-router'

const { items, totalPrice, addToCart, removeFromCart, totalItems, removeAllFromCart } = useCartStore()

const router = useRouter()

const emit = defineEmits(['closeDialog'])
</script>

<style scoped>
h2 {
    font-size: 24px;
}
.v-card::-webkit-scrollbar {
  width: 8px;               
}
.v-card::-webkit-scrollbar-track {
  background: rgb(235, 235, 235);     
}
.v-card::-webkit-scrollbar-thumb {
  background-color: rgb(192, 192, 192);  
  border-radius: 20px;       
}
</style>