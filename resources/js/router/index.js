import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export const routes = [
    {
        path: '/admin/dashboard',
        name: 'adminDashboard',
        component: () => import('../views/AdminDashboard.vue'),
        meta: { requiresAuth: true, role: 'admin' , title: "Admin dashboard" }
    },
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiresAuth: true,
            title: 'Home Page',
            role: 'user'
        }
    },
    {
        path: '/about',
        name: 'Tentang kami',
        component: () => import('../views/AboutView.vue'),
        meta: {
            requiresAuth: true,
            title: 'About Page',
            role: 'user'
        }
    },
    {
        path: '/program',
        name: 'Program',
        component: () => import('../views/ProgramView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Program Page',
            role: 'user'
        }
    },
    {
        path: '/article',
        name: 'Artikel',
        component: () => import('../views/ArtikelView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Artikel Page',
            role: 'user'
        }
    },
    {
        path: '/testimoni',
        name: 'Testimoni',
        component: () => import('../views/TestimoniView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Testimoni Page',
            role: 'user'
        }
    },
    {
        path: '/kontak',
        name: 'Kontak',
        component: HomeView,
        meta: {
            requiresAuth: true,
            title: 'Home Page',
            role: 'user'
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