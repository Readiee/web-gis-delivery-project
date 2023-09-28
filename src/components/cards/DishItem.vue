<template>
  <v-card class="dish-card" max-width="300" max-height="300" style="padding: 0;">
    <v-img :src="props.img" class="dish-image" width="100%" height="100%" cover style="color: white; pointer-events: none;" />
    <div class="dish-card__text">
      <h3>{{ title }}</h3>
      <h3><span class="font-weight-black" style="color: orange;">$ </span>{{ price }}</h3>
      <v-btn style="padding: 0;" variant="plain" color="white" append-icon="navigate_next" @click="addToCart">В корзину</v-btn>
    </div>
  </v-card>
</template>
  
<script setup lang="ts">
  
const props = defineProps({
	img: { type: String, required: true },
	title: { type: String, required: true },
	price: { type: Number, required: true }
})
  
const addToCart = () => {
}
</script>
  
<style scoped>
.dish-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  z-index: 1; /* Убедитесь, что псевдоэлемент находится выше изображения */
}
.dish-card__text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 16px;
  color: white;
}
</style>
  