export default [
	{
		path: '/menu',
		name: 'menu',
		component: () => import('@/views/menu/MenuView.vue'),
		middleware: false, // Публичная
	},
]
