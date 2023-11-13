<template>
  <v-container>
    <div class="main">
      <div class="content-block mt-3">
        <div class="content-block__header mb-8">
          <h2>Confirming order</h2>
        </div>

        <div class="content-block__main">
          <div class="data-block">
            <h3 class="mb-3">Personal data</h3>
            <div class="data-position mb-2"><p class="data-position__title">Name</p><p>{{ user.name }}</p></div>
            <div class="data-position mb-2"><p class="data-position__title">Phone</p><p>{{ user.phone }}</p></div>
          </div>
          
          <div class="data-block">
            <h3 class="mb-3">Delievery</h3>

            <div class="data-position mb-2">
              <p class="data-position__title">Delivery address</p>
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
              <p class="data-position__title">Payment method</p>
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
              <p class="data-position__title">Comment for order</p>
              <textarea id="comment" v-model="orderComment" name="comment" class="comment-textarea" />
            </div>
          </div>

          <div class="actions d-flex mt-8">
            <v-btn prepend-icon="arrow_back_ios" color="grey" class="mr-auto" @click="router.push({ name: 'cart' })">Back to cart</v-btn>
            <v-btn color="primary">Confirm order</v-btn>
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
const { order } = useOrderingStore()

const router = useRouter()

const paymentMethod = ref('')
const orderComment = ref('')

const confirmPaymentMethod = (isActive) => { 
	order.payMethod = paymentMethod.value
	isActive.value = false
}

</script>

<style scoped lang="scss">
.v-container {
  .main {
    .content-block {
      margin: 0 auto;
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
            border: 1px solid #ccc;
            border-radius: 5px;
            resize: none;

            &:focus {
              transition: 0.2s ease;
              outline: 1px solid #EB5757;
            }

            &:not(:focus){
              transition: 0.2s ease;
              outline: 1px solid #ccc;
            }
          }
      }
    }
  }
}
</style>
