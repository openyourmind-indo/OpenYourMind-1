<script setup>
defineProps({
    data: {
        type: [Object, Array],
        required: true
    }
})
</script>
<template>
    <div v-for="({ title, description, img, id }) in data" :key="id"
        class="max-w-xs mb-8 bg-white border border-gray-200 shadow lg:mb-0 lg:mr-4 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="w-full h-32 rounded-t-lg" :src="img" :alt="title" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-secondary dark:text-white">
                    {{ title }}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 font-main dark:text-gray-400">
                {{ description }}
            </p>
        </div>
    </div>
</template>
