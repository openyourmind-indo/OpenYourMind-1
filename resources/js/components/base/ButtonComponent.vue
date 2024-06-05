<script setup>
defineEmits(['actions'])
defineProps({
    title: {
        type: String,
        required: true,
        default: 'Contact Us'
    }, class: {
        type: String,
        // ? is relate with responsive button
        default: 'text-red-600'
    }, disabled: {
        required: false
    }
})
</script>
<template>
    <button :disabled="disabled" @click="$emit('actions')" :class="class">
        {{ title }}
        <slot />
    </button>
</template>
