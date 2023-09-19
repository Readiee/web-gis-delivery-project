export default [
	{
		path: '/contact',
		name: 'contact',
		component: () => import('@/views/contact/ContactView.vue'),
		middleware: false, // Публичная
	},
]
