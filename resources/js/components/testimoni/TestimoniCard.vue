<script setup>
defineProps({
    data: {
        type: Array,
        required: true,
    }
})
</script>
<template>
    <section class="flex flex-col items-center justify-between py-8 lg:flex-row bg-primary-bg-brown">
        <article v-for="({ title, year }) in data" :key="year"
            class="flex flex-col pb-4 text-center lg:text-left lg:pb-0 lg:px-12 xl:px-24 text-card-white font-secondary">
            <header class="text-base font-bold">{{ title }}</header>
            <footer class="text-4xl font-extrabold">{{ year }}</footer>
        </article>
    </section>
</template>
