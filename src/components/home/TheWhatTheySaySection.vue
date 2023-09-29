<template>
  <section class="section" style="margin-top: 100px; margin-bottom: 130px;">
    <v-container style="height: 100%; position: relative;">
      <div class="d-flex justify-space-between">
        <div class="section__start">
          <v-img src="@/assets/images/home/what_they_say_section_image.png" style="width: 100%;" />
        </div>

        <div class="section__end" style="width: 50%;">
          <h3 class="text-caption-color">What They Say</h3>
          <h2 class="mt-4">
            What Our Customers Say About Us
          </h2>
          <p class="font-weight-medium mt-4">“Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivery. I highly recommend Fudo  to you.”</p>
          
          <list-item 
            img="https://imgbb.ru/frontend/users/avatars/2022-10-29/whyf0gudzl6w8bu45x5mn04yclk2afrtb54.jpg" 
            title="Theresa Jordan"
            caption="Food Enthusiast"
            class="mt-4"
          />

          <div class="rating mt-4">
            <v-icon v-for="i in 5" :key="i" color="yellow-darken-2 ml-2">star</v-icon>
          </div>
        </div>

        <v-card style="position: absolute; top: 470px; left: 350px; padding: 24px; cursor: pointer;">
          <h3>Our Reviewers</h3>
          <avatars-row :avatars="avatars" />
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ListItem from '@/components/UI/ListItem.vue'
import AvatarsRow from '@/components/UI/AvatarsRow.vue'

const router = useRouter()

const avatars = [
	'https://yt3.googleusercontent.com/ytc/AL5GRJWplTJ3ILeNvHcKcXRnGLgRCWI2Mc3f71H2Pmqa_Q=s900-c-k-c0x00ffffff-no-rj',
	'https://images.squarespace-cdn.com/content/v1/566605b469a91a17ec7c1c02/1449540368303-265E8K8F6IWGUCF456W6/Lima01.jpg',
	'https://cdn.vuetifyjs.com/images/john.jpg',
	'src/assets/images/12k.png'
]
</script>

<style lang="scss" scoped>
.section {
  .section__start {
    width: 45%;
  }

  .section__end {
    margin-top: 160px;
  }
}
</style>
