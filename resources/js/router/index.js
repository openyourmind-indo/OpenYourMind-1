import { createRouter, createWebHistory } from 'vue-router'
import HomeView from 'views/HomeView.vue'
export const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: 'Home Page'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('views/AboutView.vue'),
        meta: {
            title: 'About Page'
        }
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('views/ServicesView.vue'),
        meta: {
            title: 'Program Page'
        }
    },
    {
        path: '/articel',
        name: 'Articel',
        component: () => import('views/ArtikelView.vue'),
        meta: {
            title: 'Artikel Page'
        }
    },
    // ! Don't delete || will match everything and put it under `$route.params.pathMatch`
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: import('views/NotFound.vue') },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
