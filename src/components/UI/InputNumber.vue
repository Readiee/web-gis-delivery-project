<template>
  <div class="input" @click.stop>
    <v-icon @click="modelValue -= 1">remove</v-icon>
    <h3 class="mx-6">{{ modelValue }}</h3>
    <v-icon @click="modelValue += 1">add</v-icon>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<number>({ required: true })</script>

<style scoped lang="scss">
.input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background-color: #EB5757;
    border-radius: 100px;

    p {
        font-size: 34px;
        padding: 0;
    }

    .v-icon {
        padding: 14px;
        border-radius: 100px;

        &:hover {
            background-color: rgba(255, 0, 0, 0.2); 
            transition: 0.2s ease;
        }
        &:active {
            background-color: rgba(255, 174, 174, 0.3);
            transition: 0.2s ease;
        }
    }
}
</style>