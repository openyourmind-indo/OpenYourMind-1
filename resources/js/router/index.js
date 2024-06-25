import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export const routes = [
    {
        path: '/',
        name: 'Beranda',
        component: HomeView,
        meta: {
            title: 'Home Page'
        }
    },
    {
        path: '/about',
        name: 'Tentang kami',
        component: () => import('../views/AboutView.vue'),
        meta: {
            title: 'About Page'
        }
    },
    {
        path: '/program',
        name: 'Program',
        component: () => import('../views/ProgramView.vue'),
        meta: {
            title: 'Program Page'
        }
    },
    {
        path: '/article',
        name: 'Artikel',
        component: () => import('../views/ArtikelView.vue'),
        meta: {
            title: 'Artikel Page'
        }
    },
    {
        path: '/testimoni',
        name: 'Testimoni',
        component: () => import('../views/TestimoniView.vue'),
        meta: {
            title: 'Testimoni Page'
        }
    },
    {
        path: '/kontak',
        name: 'Kontak',
        component: HomeView,
        meta: {
            title: 'Home Page'
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