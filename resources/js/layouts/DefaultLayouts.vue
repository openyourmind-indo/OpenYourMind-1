<!-- ? Parent Layout that's handle layouting page -->
<script setup>
</script>
<template>
    <header class="">
        <NavbarComponent />
    </header>
    <main class="container flex flex-col py-2 lg:flex-row lg:justify-between">
        <slot></slot>
    </main>
    <footer>

    </footer>
</template>
