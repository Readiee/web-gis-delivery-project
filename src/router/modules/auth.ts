export default [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/auth/LoginView.vue'),
		meta: {
			middleware: true // Только для неавторизованных
		},
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('@/views/auth/RegView.vue'),
		meta: {
			middleware: true // Только для неавторизованных
		}
	},
	{
		path: '/history',
		name: 'history',
		component: () => import('@/views/HistoryView.vue'),
		meta: {
			middleware: true // Только для авторизованных
		}
	},
]
