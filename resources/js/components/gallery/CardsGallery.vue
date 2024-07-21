<script setup>
defineProps({
    heading: {
        type: String,
        required: false,
        default: 'Gallery'
    },
    title: {
        type: String,
        required: true,
        default: 'A Gallery of Mental Health Themes Through Art'
    },
    description: {
        type: String,
        required: true,
        default: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing.'
    },
    data: {
        type: [Object, Array],
        required: true
    }
})
</script>
<template>
    <section>
        <header class="text-base font-medium font-secondary">
            {{ heading }}
        </header>
        <div class="grid grid-cols-1 pt-2 lg:grid-cols-2 place-items-start place-content-start">
            <header class="text-4xl font-bold font-secondary">{{ title }}</header>
            <aside class="text-base font-normal font-main">{{ description }}</aside>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4">
            <div class="grid gap-4" v-for="item in data" :key="item.id">
                <div>
                    <img class="h-auto max-w-full rounded-lg" :src="item.img" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
