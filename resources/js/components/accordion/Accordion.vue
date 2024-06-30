<template>
    <div class="flex flex-col items-center justify-center p-4">
        <header class="text-base font-bold font-secondary">Faq</header>
        <h1 class="mb-32 text-4xl font-bold text-center lg:text-6xl font-secondary">Asked Questions</h1>
        <div v-for="(item, index) in data" :key="index" class="w-full max-w-4xl mb-4 accordion-item">
            <button @click="toggle(index)" class="flex items-center justify-between w-full p-4 accordion-header ">
                <span class="text-lg font-bold lg:text-accordion-title font-secondary">{{ item.title }}</span>
                <svg :class="{ 'transform rotate-180': isOpen(index) }" class="w-12 h-12 transition-transform"
                    fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M5.707 8.293a1 1 0 011.414 0L10 11.172l2.879-2.879a1 1 0 011.414 1.414l-3.586 3.586a1 1 0 01-1.414 0L5.707 9.707a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>
            <div v-show="isOpen(index)" class="p-4 accordion-content">
                <p class="font-primary text-accordion-content">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    data: {
        type: Array,
        required: true,
    }
});

const openIndex = ref(null);

function toggle(index) {
    openIndex.value = openIndex.value === index ? null : index;
}

function isOpen(index) {
    return openIndex.value === index;
}
</script>

<style scoped>
.accordion-item+.accordion-item {
    border-top: 1px solid #ccc;
}
</style>
