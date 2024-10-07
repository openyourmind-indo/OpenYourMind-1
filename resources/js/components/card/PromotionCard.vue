<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})
</script>
<template>
    <div class="container grid grid-cols-1 space-y-12 text-center place-items-center">
        <h1 class="text-2xl font-bold text-white font-secondary lg:text-6xl">
            {{ title }}
        </h1>
        <p class="font-normal lg:px-14 text-white/80 font-main">
            {{ description }}
        </p>
        <slot />
    </div>
</template>
