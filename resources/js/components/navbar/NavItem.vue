<script setup>
import { routes } from '@/router/index'
import { RouterLink, useRoute } from 'vue-router';
const CurrentPage = useRoute().name
</script>
<template>
    <ul
        class="flex flex-col p-4 mt-4 font-medium capitalize transition-all duration-1000 rounded-lg backdrop-blur md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        <li v-for="({ path, name }) in routes" :key="path">
            <div v-if="name !== 'ArticelDetails'">
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
    </ul>
</template>
