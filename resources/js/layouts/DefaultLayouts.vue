<!-- ? Parent Layout that's handle layouting page -->
<script setup>
</script>
<template>
    <header class="container">
        <NavbarComponent />
    </header>
    <main class="container py-2 ">
        <slot></slot>
    </main>
    <footer>

    </footer>
</template>
<!-- lg:flex-row lg:justify-between flex flex-col -->
