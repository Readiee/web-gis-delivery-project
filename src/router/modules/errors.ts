export default [
	{
		path: '/:pathMatch(.*)*',
		name: 'notFound',
		component: () => import('@/views/errors/NotFoundView.vue'),
		middleware: false
	}
]
