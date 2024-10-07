<script setup>
defineProps({
    className: {
        type: String,
        required: false
    },
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
        required: false
    }
})
</script>
<template>
    <div class="mr-auto place-self-center lg:col-span-6">
        <header :class="className" class="pb-4 text-base font-medium font-secondary">
            {{ header }}
        </header>
        <h1 :class="className"
            class="max-w-2xl mb-4 text-3xl font-semibold leading-none tracking-tight text-primary-title md:pr-20 md:text-4xl font-secondary">
            {{ title }}
        </h1>
        <p :class="className" class="pt-4 pb-8 text-base font-normal font-main text-primary-title">
            {{ description }}
        </p>
        <slot />
    </div>
</template>
