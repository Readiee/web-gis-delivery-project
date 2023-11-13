<template>
  <v-container class="d-flex flex-column align-center my-12" style="height: 100%; position: relative;">
    <v-form @submit="onSubmit">
      <v-card class=" d-flex flex-column" width="450">
        <h2 class="text-center font-weight-black mb-8">Sign up</h2>

        <!-- <v-text-field class="mb-3" v-bind="email" name="email" label="Email" /> -->
        <v-text-field class="mb-3" v-bind="name" name="name" label="Name" />
        <v-text-field class="mb-3" v-bind="phone" name="phone" label="Phone" />
        <v-text-field class="mb-3" type="password" v-bind="password" name="password" label="Password" />
        <v-text-field class="" type="password" v-bind="confirm" name="confirm" label="Confirm password" />
        <v-checkbox class="mb-6 my-0" v-bind="terms" label="I agree with Terms of Use" color="primary" />

        <btn-validate text="Create account" size="large" type="submit" />

        <p class="text-center mt-8 font-weight-medium">Already you have an account? <span class="pointer font-weight-bold text--primary" @click="router.push({ name: 'login' })">Log in</span></p>
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
const { login } = useAuthStore()
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
	// email: yup.string().email().required(),
	name: yup.string().required(),
	password: yup.string().min(4).required(),
	confirm: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required(),
	terms: yup.boolean().required().oneOf([true], 'You must agree to terms and conditions'),
	phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
})

const { defineComponentBinds, handleSubmit, resetForm } = useForm({
	validationSchema: schema,
})

const vuetifyConfig = (state) => ({
	props: {
		'error-messages': state.errors,
	},
})


// const email = defineComponentBinds('email', vuetifyConfig)
const name = defineComponentBinds('name', vuetifyConfig)
const password = defineComponentBinds('password', vuetifyConfig)
const confirm = defineComponentBinds('confirm', vuetifyConfig)
const terms = defineComponentBinds('terms', vuetifyConfig)
const phone = defineComponentBinds('phone', vuetifyConfig)

let loading = ref(false)

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