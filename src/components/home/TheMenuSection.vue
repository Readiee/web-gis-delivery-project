<template>
  <section style="margin-top: 120px;">
    <v-container style="height: 100%; position: relative;">
      <div class="text-center">
        <h3 class="text-caption-color">Our menu</h3>
        <h2 class="font-weight mt-2">
          Menu That Always Makes You Fall In Love
        </h2>
      </div>

      <v-slide-group v-model="selectedCategoryId" show-arrows class="mx-auto my-8" style="width: fit-content;">
        <v-slide-group-item
          v-for="category in categories"
          :key="category.id"
        >
          <v-btn
            class="ma-2"
            :color="isSelected(category.id) ? 'primary' : 'white'"
            @click="handleCategory(category.id)"
          >
            <v-img :src="category.icon" width="30" class="mr-2" />
            {{ category.title }}
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>

      <div class="dish-list">
        <template v-for="dish in dishes" :key="dish.id">
          <dish-item :img="dish.img" :title="dish.title" :price="dish.price" />
        </template>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { dishes as data } from '@/data/dishes'
import { categories } from '@/data/dishes'
import DishItem from '@/components/cards/DishItem.vue'

const selectedCategoryId = ref(categories[1].id)

const isSelected = (categoryId) => {
	return categoryId == selectedCategoryId.value
}

const handleCategory = (categoryId) => {
	selectedCategoryId.value = categoryId
}

const dishes = computed(() => {
	return data.filter(dish => dish.categoryId == selectedCategoryId.value) 
}) 

</script>

<style lang="scss" scoped>
.dish-list {
  min-height: 800px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
</style>
