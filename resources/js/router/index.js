import { createRouter, createWebHistory } from 'vue-router'
import HomeView from 'views/HomeView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomeView',
            component: HomeView,
            meta: {
                title: 'Home Page'
            }
        },
        // ! Don't delete || will match everything and put it under `$route.params.pathMatch`
        // { path: '/:pathMatch(.*)*', name: 'NotFound', component: import('views/NotFound.vue') },
    ]
})

export default router
