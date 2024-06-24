<script setup>
import { routes } from '../../router/index.js'
console.log(routes);
import { RouterLink, useRoute } from 'vue-router';
const CurrentPage = useRoute().name
</script>
<template>
    <ul
        class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li v-for="({ path, name }) in routes" :key="path">
            <RouterLink :to="path"
                :class="[name === CurrentPage ? 'text-[#D17957] block px-3 py-2 text-sm rounded md:p-0' : 'block px-3 py-2 text-sm rounded md:p-0 text-[#020213]/80']">
                {{ name }}
            </RouterLink>
        </li>
    </ul>
</template>
