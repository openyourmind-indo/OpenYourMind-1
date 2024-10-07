<!-- ? Parent Layout that's handle layouting page -->
<script setup>
import { useRoute } from 'vue-router';
const router = useRoute().name !== 'Home'
</script>
<template>
    <header>
        <NavbarComponent />
    </header>
    <main :class="[router ? 'py-0' : 'py-2']">
        <slot></slot>
    </main>
    <footer>
        <FooterComponent />
    </footer>
</template>
