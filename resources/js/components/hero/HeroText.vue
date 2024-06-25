<script setup>
defineProps({
    header: {
        type: String,
        required: true
    },
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
    <div class="mr-auto place-self-center lg:col-span-6">
        <header class="pb-4 text-base font-medium font-secondary">
            {{ header }}
        </header>
        <h1
            class="max-w-2xl mb-4 text-3xl font-semibold leading-none tracking-tight text-primary-title md:pr-20 md:text-4xl font-secondary">
            {{ title }}
        </h1>
        <p class="pt-4 pb-8 text-base font-normal font-main text-primary-title">
            {{ description }}
        </p>
        <Button
            class="px-6 py-2 text-sm font-bold text-center text-white transition-all rounded-lg md:px-12 md:py-3 font-secondary bg-secondary-green md:rounded-full hover:shadow-lg"
            title="See Detail" />
    </div>
</template>
