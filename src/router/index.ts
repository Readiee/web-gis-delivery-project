// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import authRoutes from '@/router/modules/auth'
import homeRoutes from '@/router/modules/home'
import errorsRoutes from '@/router/modules/errors'
import servicesRoutes from '@/router/modules/services'
import menuRoutes from '@/router/modules/menu'
import contactRoutes from '@/router/modules/contact'
import cartRoutes from '@/router/modules/cart'
import { useAuthStore } from '@/store/auth'



const routes: RouteRecordRaw[] = [
	...authRoutes,
	...errorsRoutes,
	...homeRoutes,
	...servicesRoutes,
	...menuRoutes,
	...contactRoutes,
	...cartRoutes,
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

router.beforeEach(async (to, from, next) => {
	const loggedIn = useAuthStore().loggedIn
  
	if (!to.meta.middleware) {
		return next()
	}
	if (to.name !== 'login' && to.name !== 'signup' && !loggedIn) next({ name: 'login' })
	else if ((to.name === 'login' || to.name === 'signup') && loggedIn) next({ name: 'home' })
	else next()
})

export default router
