import { createRouter, createWebHistory } from 'vue-router'
import HomeView from 'views/Home/HomeView.vue'
export const routes = [
    {
        path: '/admin/dashboard',
        name: 'adminDashboard',
        component: () => import('../views/AdminDashboard.vue'),
        meta: { requiresAuth: true, role: 'admin', title: "Admin dashboard" }
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            requiresAuth: true,
            title: 'Home Page',
            role: 'user'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('views/About/AboutView.vue'),
        meta: {
            requiresAuth: true,
            title: 'About Page',
            role: 'user'
        }
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('views/Services/ServicesView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Program Page',
            role: 'user'
        }
    },
    {
        path: '/article',
        name: 'Articel',
        component: () => import('views/Artikel/ArtikelView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Artikel Page',
            role: 'user'
        }
    },
    {
        path: '/articke',
        name: 'Artl',
        component: () => import('views/ArtikelView.vuend'),
        meta: {
            requiresAuth: true,
            title: 'Artikel Page',
            role: 'user'
        }
    },
    {
        path: '/articel/:id',
        name: 'ArticelDetails',
        component: () => import('views/Artikel/ArtikelDetail.vue'),
        meta: {
            requiresAuth: true,
            title: 'Testimoni Page',
            role: 'user'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('views/LoginView.vue'),
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
    },

    {
        path: '/unauthorized',
        name: 'Unauthorized',
        component: () => import('../views/Unauthorized.vue')
    },
    // ! Don't delete || will match everything and put it under `$route.params.pathMatch`
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: import('views/NotFound.vue') },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


//Error: Call to undefined method App\Http\Controllers\AuthController::getUser() in file C:\Users\faiz_\OneDrive\Documents\Projek lets goo\OYM\OpenYourMind-1\vendor\laravel\framework\src\Illuminate\Routing\ControllerDispatcher.php on line 46


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    if (requiresAuth && !token) {
        next('/login');
    } else if (to.meta.role && to.meta.role !== userRole) {
        next('/unauthorized');
    } else {
        next();
    }
});



//   router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem('token');
//     const role = localStorage.getItem('role');

//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!token) {
//             next('/login');
//         } else {
//             if (to.matched.some(record => record.meta.role === role)) {
//                 next();
//             } else {
//                 next('/unauthorized'); // Redirect to unauthorized page or some other logic
//             }
//         }
//     } else {
//         next();
//     }
// });
export default router
