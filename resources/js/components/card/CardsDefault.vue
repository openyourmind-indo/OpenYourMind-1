<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: false,
        default: 'grid grid-cols-1 place-items-center lg:grid-cols-3 lg:place-items-stretch'
    }
})
</script>
<template>
    <section class="container grid py-16 place-items-center">
        <header class="pb-8 text-center font-secondary">
            <h1 class="pb-4 text-xs font-medium">{{ title }}</h1>
            <h3 class="text-3xl font-bold lg:px-52">{{ description }}</h3>
        </header>
        <div :class="class">
            <slot />
        </div>
    </section>
</template>
