export default [
	{
		path: '/services',
		name: 'services',
		component: () => import('@/views/services/ServicesView.vue'),
		middleware: false, // Публичная
		// children: [
		// 	{
		// 		path: '',
		// 		name: 'home',
		// 		component: () => import('@/views/home/HomeView.vue'),
		// 		middleware: false // Публичная
		// 	},
		// ],
	},
]
