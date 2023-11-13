<template>
  <v-dialog width="600">
    <template #activator="{ props }">
      <div v-bind="props" class="text-sad">
        <v-card class="dish-card" width="300" height="300" style="padding: 0;">
          <v-img :src="dish.img" class="dish-image" height="100%" cover style="color: white; pointer-events: none;" />

          <div class="dish-card__text">
            <h3>{{ dish.title }}</h3>
            <h3 class="mb-2"><span class="font-weight-black" style="color: orange;">$ </span>{{ dish.price }}</h3>
            
            <div style="width: 155px;">
              <v-btn
                v-if="count == 0"
                style="padding: 22px; width: 100%;"  
                @click.stop="addDish"
              >
                В корзину
              </v-btn>

              <input-number
                v-else 
                v-model="count" 
                style="width=100%"
                @add="addDish"
                @remove="removeDish"
              />
            </div>
          </div>
        </v-card>
      </div>
    </template>

    <template #default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            text="Close Dialog"
            @click="isActive.value = false"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue'
import InputNumber from '@/components/UI/InputNumber.vue'
import { CartItem, Dish } from '@/data/types'
import { useCartStore } from '@/store/cart'

  
const componentProps = defineProps({
	dish: { type: Object as () => Dish, required: true },
})

const count = computed(() => {
	return itemCount(item.id)
}) 

const item: CartItem = {
	id: componentProps.dish.id,
	title: componentProps.dish.title,
	price: componentProps.dish.price,
	quantity: 0,
	img: componentProps.dish.img,
}

const { addToCart, removeFromCart, itemCount } = useCartStore()

function addDish() {
	addToCart(item)
}

function removeDish() {
	removeFromCart(item.id)
}
</script>
  
<style scoped lang="scss">
.dish-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  z-index: 1;
}

.dish-card {
  cursor: pointer;
  &:hover .dish-image {
    // transition: 0.1s ease-in;
    // filter: brightness(70%)
  }
  .dish-card__text {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    padding: 4px 16px;
    color: white;
  }
}

</style>
  