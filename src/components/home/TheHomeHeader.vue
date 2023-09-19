<template>
  <section class="header">
    <v-container class="d-flex justify-space-between" style="height: 100%; position: relative;">
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
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

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
