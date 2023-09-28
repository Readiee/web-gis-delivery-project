<template>
  <v-container class="d-flex flex-column align-center my-12" style="height: 100%; position: relative;">
    <v-form @submit="onSubmit">
      <v-card class=" d-flex flex-column" width="450">
        <h2 class="text-center font-weight-black mb-8">Log in</h2>

        <v-text-field class="mb-3" v-bind="email" name="email" label="Email" />
        <v-text-field class="mb-5" type="password" v-bind="password" name="password" label="Password" />

        <btn-validate text="Log in" size="large" type="submit" />

        <p class="text-center mt-8 font-weight-medium">Don’t you have an account? <span class="pointer font-weight-bold text--primary" @click="router.push({ name: 'signup' })">Sign Up</span></p>
      </v-card>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import * as yup from 'yup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import BtnValidate from '@/components/UI/BtnValidate.vue'

const router = useRouter()

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(4).required()
})

const { defineComponentBinds, handleSubmit, resetForm } = useForm({
	validationSchema: schema,
})

const vuetifyConfig = (state) => ({
	props: {
		'error-messages': state.errors,
	},
})

const email = defineComponentBinds('email', vuetifyConfig)
const password = defineComponentBinds('password', vuetifyConfig)

let loading = ref(false)

const onSubmit = handleSubmit((values) => {
	loading.value = true
	console.log(values) // actions with formdata
	resetForm()
	loading.value = false
})
</script>

<style scoped>

</style>