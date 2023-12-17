<template>
  <v-container>
    <div class="main">
      <div class="content-block mt-3">
        <v-card class="order-items" style="padding: 24px;">
          <h3 class="mb-4">Order composition</h3>
          <template v-for="item in order.items" :key="item">
            <div class="order-items__item"><p>{{ item.title }}</p><p v-if="item.quantity > 1" class="ml-4">x{{ item.quantity }}</p><p>{{ item.quantity * item.price }}$</p></div>
          </template>
          <v-divider class="mt-4" />
          <div class="order-items__item"><p>Delievery</p><p>{{ order.delieveryPrice }}$</p></div>
          <v-divider class="my-2" />
          <div class="order-items__item mt-4"><h4>Order amount</h4><h4>{{ orderAmount().toFixed(2) }}$</h4></div>
        </v-card>

        <div class="content-block__header mb-8">
          <h2>Confirming order</h2>
        </div>

        <div class="content-block__main">
          <div class="data-block">
            <h3 class="mb-3">Personal data</h3>
            <div class="data-position mb-2"><p class="data-position__title">Name</p><p>{{ user.name }}</p></div>
            <div class="data-position mb-2"><p class="data-position__title">Phone</p><p>{{ user.phone }}</p></div>
          </div>
          
          <div class="data-block mt-8">
            <h3 class="mb-3">Delievery</h3>

            <div class="data-position mb-2">
              <p class="data-position__title me-10">Delivery address</p>
              <v-dialog width="800">
                <template #activator="{ props }">
                  <div v-bind="props" @click="setDefaultAddress()">
                    <textarea-btn :text="addressText" />
                  </div>
                </template>

                <template #default="{ isActive }">
                  <v-card>
                    <h3 class="mb-4">Enter the address</h3>
                    <form @submit.prevent="confirmAddress()">
                      <div class="address-inputs">
                        <v-text-field v-model="address.city" name="city" label="City" />
                        <div class="inputs-group">
                          <v-text-field v-model="address.road" name="road" label="Road" />
                          <v-text-field v-model="address.house_number" name="house_number" label="House number" />
                        </div>
                        <div class="inputs-group">
                          <v-text-field v-model="address.building" name="building" label="Building" />
                          <v-text-field v-model="address.entrance" name="entrance" label="Entrance" />
                        </div>
                        <div class="inputs-group">
                          <v-text-field v-model="address.floor" name="floor" label="Floor" />
                          <v-text-field v-model="address.flat" name="flat" label="Flat" />
                        </div>
                      </div>
                      <!-- INTERACTIVE MAP HERE -->
                      <AppMap v-model="address" />
                    
                      <v-btn :disabled="!isValid" type="submit" class="mt-5" text="Confirm" style="width: 100%;" @click="isActive.value = false;" />
                    </form>
                  </v-card>
                </template>
              </v-dialog>
            </div>
            
            <div class="data-position mb-2">
              <p class="data-position__title me-10">Payment method</p>
              <v-dialog width="500">
                <template #activator="{ props }">
                  <div v-bind="props">
                    <textarea-btn :text="order.payMethod" />
                  </div>
                </template>

                <template #default="{ isActive }">
                  <v-card>
                    <h3 class="mb-4">Select the payment method</h3>
                    <v-radio-group v-model="paymentMethod">
                      <v-radio label="Credit card" value="Credit card" />
                      <v-radio label="Cash" value="Cash" />
                    </v-radio-group>
                    <v-btn text="Confirm" @click="confirmPaymentMethod(isActive)" />
                  </v-card>
                </template>
              </v-dialog>
            </div>
            
            <div class="data-position mb-2">
              <p class="data-position__title me-10">Comment for order</p>
              <textarea id="comment" v-model="orderComment" name="comment" class="comment-textarea" />
            </div>

            <div class="actions d-flex mt-10" style="width: 600px;">
              <v-btn prepend-icon="arrow_back_ios" color="grey" class="mr-auto" @click="router.push({ name: 'cart' })">Back to cart</v-btn>
              <v-btn 
                :disabled="loading || cartIsEmpty"
                :loading="loading" 
                color="primary"
                @click="confirmOrder()"
              >
                Confirm order
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import TextareaBtn from '@/components/UI/TextareaBtn.vue'
import AppMap from '@/components/AppMap.vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { useOrderingStore } from '@/store/ordering'
import { ref, computed, toRaw } from 'vue'
import { Address } from '@/data/types'

import { orders } from '@/data/orders'
import { useCartStore } from '@/store/cart'

const { user } = useAuthStore()
const { order, orderAmount, resetOrder } = useOrderingStore()
const { clearCart } = useCartStore()

const router = useRouter()

const paymentMethod = ref('Credit card')
const orderComment = ref('')
const cartIsEmpty = computed(() => {
	return order.items.length < 1
}) 

const confirmPaymentMethod = (isActive) => { 
	order.payMethod = paymentMethod.value
	isActive.value = false
}

const loading = ref(false)

const confirmOrder = () => {
	loading.value = true
	setTimeout(() => {
		order.date = new Date()
		order.id = orders.length + 1
		console.log(order)
		console.log(order.id)
    
		orders.push({
			id: toRaw(order.id),
			user: toRaw(order.user),
			items: toRaw(order.items),
			address: toRaw(order.address),
			phone: toRaw(order.phone),
			comment: toRaw(order.comment),
			payMethod: toRaw(order.payMethod),
			delieveryPrice: toRaw(order.delieveryPrice),
			date: toRaw(order.date),
		})
		router.push( { name: 'history'} )
		clearCart()
		loading.value = false
	}, 1000)
}


const address = ref<Address>({
	city: '',
	house_number: '',
	road: '',
	building: '',
	entrance: '',
	floor: '',
	flat: '',
	comment: '',
})

const addressText = computed(() => {
	const city = order.address.city ? order.address.city : ''
	const road = order.address.road ? ', ' + order.address.road : ''
	const house_number = order.address.house_number ? ', ' + order.address.house_number : ''
	const building = order.address.building ? ', ' + order.address.building : ''
	const entrance = order.address.entrance ? ', ' + order.address.entrance : ''
	const floor = order.address.floor ? ', ' + order.address.floor : ''
	const flat = order.address.flat ? ', ' + order.address.flat : ''

	return city + road + house_number + building + entrance + floor + flat
})

const confirmAddress = () => { 
	order.address.city = address.value.city
	order.address.house_number = address.value.house_number
	order.address.road = address.value.road
	order.address.building = address.value.building
	order.address.entrance = address.value.entrance
	order.address.floor = address.value.floor
	order.address.flat = address.value.flat
	order.address.comment = address.value.comment
}

const isValid = computed(() => {
	if (address.value.city && address.value.road && address.value.house_number) {
		return address.value.city.trim() != '' && address.value.road.trim() != '' && address.value.house_number.trim() != ''
	}
	else return false
})

const setDefaultAddress = () => {
	address.value.city = order.address.city 
	address.value.house_number = order.address.house_number 
	address.value.road = order.address.road 
	address.value.building = order.address.building 
	address.value.entrance = order.address.entrance 
	address.value.floor = order.address.floor 
	address.value.flat = order.address.flat 
	address.value.comment = order.address.comment 
}



</script>

<style scoped lang="scss">
.inputs-group {
        display: flex;
        justify-content: space-between;
        gap: 16px;

        .v-text-field {
          width: 50%;
        }
      }
.v-container {
  .main {
    position: relative;
    width: 85%;
    margin: 0 auto;
    .content-block {
      margin: 0 auto;
      .order-items {
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      width: 340px;

      .order-items__item {
        display: flex;
        width: 100%;

        p {
          margin-top: 6px;
        }
        
        *:last-child {
        margin-left: auto;
      }
      }
    }
      .content-block__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      }

      .data-position {
          display: flex;
          .data-position__title {
            width: 160px;
          }

          .comment-textarea {
            text-align: start;
            width: 400px;
            height: 120px;
            padding: 10px;
            border: 1px solid #e3e3e3;
            border-radius: 5px;
            resize: none;

            &:focus {
              transition: 0.2s ease-in-out;
              outline: 0.2px solid #EB5757;
            }

            &:not(:focus){
              transition: 0.2s ease-in-out;
              outline: 0 solid #e3e3e3;
            }
          }
      }
    }
  }
}
</style>
