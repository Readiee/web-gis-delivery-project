<template>
  <v-container class="d-flex flex-column align-center my-12" style="height: 100%; position: relative;">
    <v-form @submit="onSubmit">
      <v-card class=" d-flex flex-column" width="450">
        <h2 class="text-center font-weight-black mb-8">Sign up</h2>

        <v-text-field class="mb-3" v-bind="email" name="email" label="Email" />
        <v-text-field class="mb-3" type="password" v-bind="password" name="password" label="Password" />
        <v-text-field class="" type="confirm" v-bind="confirm" name="confirm" label="Confirm password" />
        <v-checkbox class="mb-6 my-0" v-bind="terms" label="I agree with Terms of Use" color="primary" />

        <!-- <v-radio-group>
          <v-radio label="Radio 1" value="1" />
          <v-radio label="Radio 2" value="2" />
          <v-radio label="Radio 3" value="3" />
        </v-radio-group> -->

        <!-- <v-textarea label="Textarea label" variant="outlined" /> -->

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

const router = useRouter()

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(4).required(),
	confirm: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required(),
	terms: yup.boolean().required().oneOf([true], 'You must agree to terms and conditions'),
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
const confirm = defineComponentBinds('confirm', vuetifyConfig)
const terms = defineComponentBinds('terms', vuetifyConfig)

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