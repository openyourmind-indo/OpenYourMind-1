<script setup>
import { ref } from 'vue'
const myinput = ref('')
const data = () => console.log(myinput.value)
</script>

<template>
    <form class="flex items-center max-w-lg mx-auto" @submit.prevent="data">
        <label for="voice-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <input v-model="myinput" type="text" id="voice-search"
                class="block w-full px-16 text-sm bg-transparent border rounded-full focus:ring-card-white focus:border-card-white lg:pr-96 border-card-white placeholder:text-card-white text-card-white ps-5"
                placeholder="Your email" required />
            <button type="submit"
                class="absolute inset-y-0 flex items-center px-4 text-black lg:px-8 font- font-secondary rounded-e-full bg-card-white end-0">
                Subscribe Us
            </button>
        </div>
    </form>
</template>
