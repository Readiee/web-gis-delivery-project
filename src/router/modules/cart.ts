export default [
	{
		path: '/cart',
		name: 'cart',
		component: () => import('@/views/cart/CartView.vue'),
		meta: {
			middleware: true // Только для авторизованных
		},
	},
	{
		path: '/ordering',
		name: 'ordering',
		component: () => import('@/views/cart/OrderingView.vue'),
		meta: {
			middleware: true // Только для авторизованных
		},
	},
]
