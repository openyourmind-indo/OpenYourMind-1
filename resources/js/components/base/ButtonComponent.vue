<script setup>
defineEmits(['actions'])
defineProps({
    title: {
        type: String,
        required: false,
        default: 'Contact Us'
    }, class: {
        type: String,
        // ? is relate with responsive button
        default: 'max-[374px]:hidden px-2 md:px-6 py-2 text-sm font-medium font-secondary text-center text-white bg-secondary-green rounded-lg md:rounded-full hover:shadow-lg transition-all'
    }, disabled: {
        required: false
    }
})
</script>
<template>
    <button type="button" :disabled="disabled" @click="$emit('actions')" :class="class">
        {{ title }}
        <slot />
    </button>
</template>
