import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export const routes = [
    {
        path: '/',
        name: 'Beranda',
        component: HomeView,
        meta: {
            requiresAuth: true,
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
    },  {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
        meta: {
            title: 'Login Page'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterView.vue'),
        meta: {
            title: 'Register Page'
        }
    }, {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component:  () => import('../views/ErrorView.vue'),
        meta: {
            title: 'error Page'
        }
    }
    // ! Don't delete || will match everything and put it under `$route.params.pathMatch`
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: import('views/NotFound.vue') },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next({ name: 'login' });
    } else {
        next();
    }
});


export default router