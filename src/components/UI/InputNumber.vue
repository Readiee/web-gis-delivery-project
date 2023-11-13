<template>
  <div class="input" @click.stop>
    <v-icon @click="remove">remove</v-icon>
    <h3 class="mx-6">{{ modelValue }}</h3>
    <v-icon @click="add">add</v-icon>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const modelValue = defineModel<number>({ required: true })
const emits = defineEmits(['add', 'remove']) 

const add = () => {
	emits('add')
	// modelValue.value += 1
}

const remove = () => {
	emits('remove')
	// modelValue.value -= 1
}
</script>

<style scoped lang="scss">
.input {
    width: 155px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;
    background-color: #EB5757;
    border-radius: 100px;
    color: white 

    p {
        font-size: 32px;
        padding: 0;
    }

    .v-icon {
        padding: 14px;
        border-radius: 100px;

        &:hover {
            background-color: rgba(98, 75, 75, 0.2); 
            transition: 0.2s ease;
        }
        &:active {
            background-color: rgba(91, 70, 70, 0.3);
            transition: 0.2s ease;
        }
    }
}
</style>