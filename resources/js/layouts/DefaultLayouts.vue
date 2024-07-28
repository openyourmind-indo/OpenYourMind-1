<!-- ? Parent Layout that's handle layouting page -->
<script setup>
import { useRoute } from 'vue-router';
const router = useRoute().name !== 'Home'
</script>
<template>
    <header :class="[router ? 'bg-primary-main' : 'bg-transparent']">
        <NavbarComponent />
    </header>
    <main :class="[router ? 'py-0' : 'py-2']">
        <slot></slot>
    </main>
    <footer>
        <FooterComponent />
    </footer>
</template>
<!-- lg:flex-row lg:justify-between flex flex-col -->
