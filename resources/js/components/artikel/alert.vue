<script setup>
defineProps({
    data: {
        type: [Array, Object],
        required: false
    }
})
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>
<template>
    <div v-for="(item, index) in data" :key="index" v-bind="attrs"
        class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span v-bind="attrs" class="font-medium">{{ item }}</span> Change a few things up and try submitting again.
    </div>
</template>
