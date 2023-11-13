<template>
  <v-container class="d-flex flex-column align-center my-12" style="height: 100%; position: relative;">
    <v-form @submit="onSubmit">
      <v-card class=" d-flex flex-column" width="450">
        <h2 class="text-center font-weight-black mb-8">Log in</h2>

        <v-text-field class="mb-3" v-bind="phone" name="phone" label="Phone" />
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
import { useAuthStore } from '../../store/auth'

const router = useRouter()
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
	phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
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

const phone = defineComponentBinds('phone', vuetifyConfig)
const password = defineComponentBinds('password', vuetifyConfig)

let loading = ref(false)

const { login, user, loggedIn } = useAuthStore()

const onSubmit = handleSubmit((values) => {
	loading.value = true
	login('Bulat', values.phone)
	resetForm()
	loading.value = false
	router.push({ name: 'home' })
})
</script>

<style scoped>

</style>