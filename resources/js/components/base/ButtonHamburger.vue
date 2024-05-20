<script setup>
import { ref } from 'vue'
defineEmits(['hamburgerToggle'])
defineProps({
    hamburger: {
        type: Boolean,
        required: false,
    }
})
</script>
<template>
    <button @click="$emit('hamburgerToggle')" data-collapse-toggle="navbar-sticky" type="button"
        class="inline-flex flex-col items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg text md:hidden"
        aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <p
            :class="[hamburger ? 'bg-slate-600 transition duration-300 ease-in-out size-4 rounded-sm dark:bg-[#353535]' : 'size-5 transition duration-300 ease-in-out rounded-sm bg-slate-600 dark:bg-[#353535] origin-bottom-left rotate-45']">
        </p>
        <p
            :class="[hamburger ? 'size-4 my-1 transition duration-300 ease-in-out rounded-sm bg-slate-400 dark:bg-[#5e5e5e]' : 'size-4 my-1 transition duration-300 ease-in-out rounded-sm bg-slate-400 dark:bg-[#5e5e5e] scale-0']">
        </p>
        <p
            :class="[hamburger ? ' size-4 transition duration-300 ease-in-out rounded-sm bg-slate-600 dark:bg-[#353535]' : 'size-5 transition duration-300 ease-in-out rounded-sm bg-slate-600 dark:bg-[#353535] origin-top-left -rotate-45']">
        </p>
    </button>
</template>
