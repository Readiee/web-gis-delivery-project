<template>
  <section class="my-12">
    <v-container style="height: 100%; position: relative;">
      <div class="d-flex flex-column align-center text-center">
        <h3 class="text-caption-color">What we serve</h3>
        <h2 class="font-weight mt-2">
          Your Favorite Food<br>Delivery Partner
        </h2>
        
        <div class="d-flex justify-space-around mt-2" style="width: 100%;">
          <template v-for="card in mediaCards" :key="card.title">
            <media-card :img="card.img" :title="card.title" :caption="card.caption" />
          </template>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import MediaCard from '@/components/UI/MediaCard.vue'

const mediaCards = [
	{ img: '/src/assets/images/home/advn_1.png', title: 'Easy To Order', caption: 'You only need a few steps in ordering food' },
	{ img: '/src/assets/images/home/advn_2.png', title: 'Fastest Delivery', caption: 'Delivery that is always ontime even faster' },
	{ img: '/src/assets/images/home/advn_3.png', title: 'Best Quality', caption: 'Not only fast for us quality is also number one' },
]

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
