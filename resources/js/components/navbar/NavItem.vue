<script setup>
import { routes } from '@/router/index'
import { RouterLink, useRoute } from 'vue-router';
import { useStoreAuth } from '@/store/auth/auth';
const CurrentPage = useRoute().name
</script>
<template>
    <ul
        class="flex flex-col p-4 mt-4 font-medium capitalize transition-all duration-1000 rounded-lg backdrop-blur-xl backdrop-blur md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        <li v-for="({ path, name }) in routes" :key="path">
            <div v-if="
                name !== 'ArticelDetails' &&
                name !== 'adminDashboard' &&
                name !== 'login' &&
                name !== 'register' &&
                name !== 'Unauthorized'
            ">
                <RouterLink v-if="CurrentPage === 'Home'" :to="path"
                    :class="[name === CurrentPage ? 'text-primary-title font-main block px-3 py-2 text-sm rounded md:p-0 font-semibold' : 'font-normal block px-3 py-2 text-sm rounded md:p-0 text-primary-title font-main']">
                    {{ name }}
                </RouterLink>
                <RouterLink v-else :to="path"
                    :class="[name === CurrentPage ? 'text-white font-main block px-3 py-2 text-sm rounded md:p-0 font-semibold' : 'font-normal block px-3 py-2 text-sm rounded md:p-0 text-white font-main']">
                    {{ name }}
                </RouterLink>
            </div>
        </li>
        <li>
            <button @click="useStoreAuth().logout()" type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Logout
            </button>
        </li>
    </ul>
</template>
