export default [
	{
		path: '/',
		component: () => import('@/views/home/HomeView.vue'),
		middleware: false, // Публичная
		children: [
			{
				path: '',
				name: 'home',
				component: () => import('@/views/home/HomeView.vue'),
				middleware: false // Публичная
			},
		],
	},
]
