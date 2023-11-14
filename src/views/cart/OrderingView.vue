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
          <div class="order-items__item mt-4"><h4>Order amount</h4><h4>{{ orderAmount() }}$</h4></div>
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
              <v-dialog width="600">
                <template #activator="{ props }">
                  <div v-bind="props">
                    <textarea-btn :text="order.address" />
                  </div>
                </template>

                <template #default="{ isActive }">
                  <v-card>
                    <h3 class="mb-4">Enter the address</h3>
                    <!-- INTERACTIVE MAP HERE -->
                    <v-btn text="Confirm" @click="isActive.value = false" />
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
                :disabled="loading"
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
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { useOrderingStore } from '@/store/ordering'
import { ref } from 'vue'

const { user } = useAuthStore()
const { order, orderAmount } = useOrderingStore()

const router = useRouter()

const paymentMethod = ref('')
const orderComment = ref('')

const confirmPaymentMethod = (isActive) => { 
	order.payMethod = paymentMethod.value
	isActive.value = false
}

const loading = ref(false)
const confirmOrder = () => {
	loading.value = true
	setTimeout(() => {
		alert('Success')
		loading.value = false
	}, 1000)
}

</script>

<style scoped lang="scss">
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
