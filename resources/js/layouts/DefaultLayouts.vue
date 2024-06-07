<!-- ? Parent Layout that's handle layouting page -->
<script setup>
</script>
<template>
    <header class="container">
        <NavbarComponent />
    </header>
    <main class="container flex flex-col py-2 lg:flex-row lg:justify-between">
        <slot></slot>
    </main>
    <footer>

    </footer>
</template>
