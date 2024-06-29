import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export const routes = [
    {
        path: '/',
        name: 'home',
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
            requiresAuth: true,
            title: 'About Page'
        }
    },
    {
        path: '/program',
        name: 'Program',
        component: () => import('../views/ProgramView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Program Page'
        }
    },
    {
        path: '/article',
        name: 'Artikel',
        component: () => import('../views/ArtikelView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Artikel Page'
        }
    },
    {
        path: '/testimoni',
        name: 'Testimoni',
        component: () => import('../views/TestimoniView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Testimoni Page'
        }
    },
    {
        path: '/kontak',
        name: 'Kontak',
        component: HomeView,
        meta: {
            requiresAuth: true,
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
    }
    // ! Don't delete || will match everything and put it under `$route.params.pathMatch`
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: import('views/NotFound.vue') },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


//Error: Call to undefined method App\Http\Controllers\AuthController::getUser() in file C:\Users\faiz_\OneDrive\Documents\Projek lets goo\OYM\OpenYourMind-1\vendor\laravel\framework\src\Illuminate\Routing\ControllerDispatcher.php on line 46


router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    console.log(`Navigating to: ${to.name}, requiresAuth: ${to.meta.requiresAuth}, token: ${token}`);
  
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token) {
            console.log('No token found, redirecting to login.');
            next({ name: 'login' });
        } else if(token === "undefined") {
            console.log("Token is undefined, redirecting to login.");
            localStorage.removeItem('token');
            next({ name: 'login' });
        } else {
            console.log('Token found, proceeding to the requested route.');
            next();
        }
    } else {
        next();
    }
});

  
  

export default router