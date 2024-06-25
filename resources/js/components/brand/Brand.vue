<script setup>
defineProps({
    data: {
        type: [Array, String],
        required: true,
    }
})
</script>
<template>
    <IconVue :icon="data" class="text-red-400 fill-red-400 size-10" />
</template>
