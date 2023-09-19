export default [
	{
		path: '/auth',
		name: 'login',
		component: () => import('@/views/auth/LoginView.vue'),
		meta: {
			middleware: true // Только для неавторизованных
		},
		children: [
			{
				path: '/reg',
				name: 'reg',
				component: () => import('@/views/auth/RegView.vue'),
				meta: {
					middleware: true // Только для неавторизованных
				}
			}
		]
	}
]
