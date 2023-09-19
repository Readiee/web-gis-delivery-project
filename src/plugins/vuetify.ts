/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { ThemeDefinition, createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'

const lightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		background: '#fff',
		surface: '#fff',
		primary: '#EB5757',
		'primary-lighten-1': '#FEE9DE',
		secondary: '#898989',
	},
}

const darkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		primary: '#EB5757',
		secondary: '#898989',
	},
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	theme: {
		defaultTheme: 'lightTheme',
		themes: {
			darkTheme,
			lightTheme,
		},
	},
	icons: {
		defaultSet: 'md',

		aliases,
		sets: {
			md,
		},
	},
	defaults: {
		VBtn: {
			style: [
				{ textTransform: 'none' },
				{ display: 'flex' },
				{ alingItems: 'center' },
				{ fontWeight: 'medium' },
				{ letterSpacing: '0' },
				{ borderRadius: '100px' },
				{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' },
			],
		},
		VCard: {
			style: [
				{ borderRadius: '15px' }
			],
		}
	},
})
