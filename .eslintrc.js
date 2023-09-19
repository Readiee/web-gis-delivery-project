module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
	],
	rules: {
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: {
					max: 4,
				},
				multiline: {
					max: 1,
				},
			},
		],

		semi: [2, 'never'],
		quotes: [2, 'single', { avoidEscape: true }],
		indent: ['error', 'tab'],
		'vue/block-lang': [
			'error',
			{
				script: {
					lang: 'ts',
				},
			},
		],

		'vue/singleline-html-element-content-newline': 'off'
	},
}
