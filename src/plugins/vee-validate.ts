// import { AllRules } from '@vee-validate/rules'
// import { defineRule, configure, Field, Form, ErrorMessage } from 'vee-validate'

// export default function setupVeeValidate (app) {
// 	app.component('VeeField', Field)
// 	app.component('VeeForm', Form)
// 	app.component('VeeErrorMessage', ErrorMessage)

// 	Object.keys(AllRules).forEach(rule => {
// 		defineRule(rule, AllRules[rule])
// 	})

// 	configure({
// 		validateOnInput: false, // Валидация при вводе
// 		validateOnBlur: false, // Валидация при снятии фокуса
// 		validateOnChange: true, // Валидация при изменении значения
// 		validateOnModelUpdate: true // Валидация при обновлении модели
// 	})
// }
