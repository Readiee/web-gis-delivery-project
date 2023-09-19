// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import authRoutes from '@/router/modules/auth'
import homeRoutes from '@/router/modules/home'
import errorsRoutes from '@/router/modules/errors'
import servicesRoutes from '@/router/modules/services'
import menuRoutes from '@/router/modules/menu'
import contactRoutes from '@/router/modules/contact'



const routes: RouteRecordRaw[] = [
	...authRoutes,
	...errorsRoutes,
	...homeRoutes,
	...servicesRoutes,
	...menuRoutes,
	...contactRoutes,
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
