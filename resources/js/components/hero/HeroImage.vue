<script setup>
defineProps(['data'])
</script>
<template>
    <div class="lg:col-span-6">
        <img :src="data" alt="mockup" class="w-96 h-72">
    </div>
</template>
