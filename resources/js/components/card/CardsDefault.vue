<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>
<template>
    <section class="container grid py-16 place-items-center">
        <header class="pb-8 font-bold text-center font-secondary">
            <h1 class="pb-4 text-xs">{{ title }}</h1>
            <h3 class="text-3xl lg:px-52">{{ description }}</h3>
        </header>
        <div class="grid grid-cols-1 place-items-center lg:grid-cols-3 lg:place-items-stretch">
            <slot />
        </div>
    </section>
</template>
