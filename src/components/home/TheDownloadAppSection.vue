<template>
  <section class="section" style="margin-top: 100px;">
    <v-container style="height: 100%; position: relative;">
      <div class="content-block bgr-secondary align-center">
        <div class="section__start">
          <h3 class="text-caption-color">DOWNLOAD APP</h3>
          <h2 class="font-weight mt-4">
            Get Started With Fudo Today!
          </h2>
          <p class="font-weight-medium mt-4">Discover food wherever and whenever and get your food delivered quickly.</p>
          
          <v-btn class="mt-4">Get The App</v-btn>
        </div>

        <div class="section__end">
          <v-img src="@/assets/images/home/download_app_section_image.png" style="height: 100%;" />
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ListItem from '@/components/UI/ListItem.vue'

const router = useRouter()
</script>

<style lang="scss" scoped>
.section {
  .section__start {
    width: 40%;
  }

  .section__end {
    width: 65%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

.content-block {
  height: 560px;
  display: flex;
  justify-content: space-between;
  padding: 75px;
  border-radius: 20px;
}
</style>
