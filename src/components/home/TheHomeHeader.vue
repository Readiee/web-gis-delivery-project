<template>
  <section class="header">
    <v-container style="height: 100%; position: relative;">
      <div class="d-flex justify-space-between">
        <div class="header__start">
          <span class="text-h7 text--primary font-weight-medium billet">More than faster  🍒</span>
        
          <h1 class="mt-8 mb-6 font-weight-black" style="font-size: 4rem; line-height: 4.5rem;">
            Be The Fastest <br>
            In Delivering <br>
            Your <span class="text--primary">Food</span>
          </h1>

          <p class="text-h7 mb-8 font-weight-medium">
            Our job is to filling your tummy with delicious food <br> and with fast and free delivery
          </p>

          <v-btn size="x-large" color="primary" @click="router.push({ name: `menu` })">Get Started</v-btn>
        </div>

        <v-spacer />

        <div class="header__end" style="width: 50%;">
          <v-img src="@/assets/images/home/home_header_image.png" style="width: 100%;" />
        </div>
      </div>
      
      <div class="mt-10 d-flex align-center">
        <avatars-row :avatars="avatars" class="mr-2" />
        <div>
          <h3>Our Happy Customers</h3>
          <div class="d-flex">
            <v-icon color="orange darken-4">star</v-icon>
            <h4 class="ml-1">4,8 <span class="text-body-1 grey">(12.5k Review)</span></h4>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import AvatarsRow from '@/components/UI/AvatarsRow.vue'

const avatars = [
	'https://yt3.googleusercontent.com/ytc/AL5GRJWplTJ3ILeNvHcKcXRnGLgRCWI2Mc3f71H2Pmqa_Q=s900-c-k-c0x00ffffff-no-rj',
	'https://images.squarespace-cdn.com/content/v1/566605b469a91a17ec7c1c02/1449540368303-265E8K8F6IWGUCF456W6/Lima01.jpg',
	'https://cdn.vuetifyjs.com/images/john.jpg',
]

const router = useRouter()
</script>

<style lang="scss" scoped>
.header {
  height: 700px;
  .header__start {
    margin-top: 100px;
  }

  .header__end {
    position: absolute;
    right: 0;
  }
}
</style>
