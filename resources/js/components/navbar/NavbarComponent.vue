<!-- ? Sample Navbar Components -->
<script setup>
import { ref } from 'vue'
import BrandLogo from 'public/Logo.svg'
const hamburger = ref(true)
</script>
<template>
    <!-- <ButtonHamburger @hamburgerToggle="hamburger = !hamburger" /> -->
    <nav class="bg-white border-gray-20">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto ">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img :src="BrandLogo" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-xl font-bold whitespace-nowrap text-primary-title font-secondary">Open
                    Your
                    Mind</span>
            </a>
            <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                <Button />
                <button data-collapse-toggle="navbar-cta" type="button"
                    class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <NavItem />
            </div>
        </div>
    </nav>
</template>
