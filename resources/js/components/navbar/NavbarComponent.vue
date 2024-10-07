<!-- ? Sample Navbar Components -->
<script setup>
import { ref } from 'vue'
import BrandLogo from 'public/Logo.svg'
import { useRoute } from 'vue-router';
const hamburger = ref(true);
const route = useRoute().name
</script>
<template>
    <nav class="container start-0">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto ">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img :src="BrandLogo" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-xl font-bold whitespace-nowrap text-primary-title font-secondary">
                    Open Your Mind
                </span>
            </a>
            <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                <Button :class="{
                    'max-[374px]:hidden px-2 md:px-6 py-2 text-sm font-medium font-secondary text-center text-black bg-card-white rounded-lg md:rounded-full hover:shadow-lg transition-all': route !== 'Home',
                    'max-[374px]:hidden px-2 md:px-6 py-2 text-sm font-medium font-secondary text-center text-white bg-secondary-green rounded-lg md:rounded-full hover:shadow-lg transition-all': route === 'Home'
                }" />
                <button @click="hamburger = !hamburger" data-collapse-toggle="navbar-cta" type="button"
                    class="inline-flex items-center justify-center md:hidden text-primary-title "
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <IconVue v-if="hamburger" icon="charm:menu-hamburger" class="block size-5 md:hidden" />
                    <IconVue v-else icon="line-md:close" class="size-5" />
                </button>
            </div>
            <div :class="{
                ' items-center justify-between hidden w-full md:flex md:w-auto md:order-1': hamburger, 'items-center justify-between block z-50 absolute top-20 left-0 md:relative md:top-0 md:left-0 w-full md:flex md:w-auto md:order-1'
                    :
                    !hamburger
            }" class="" id="navbar-cta">
                <NavItem />
            </div>
        </div>
    </nav>
</template>
