<script setup>
defineProps({
    data: {
        type: [Object, Array],
        required: true
    }
})
</script>
<template>
    <template v-for="({ title, description, id }) in data" :key="id">
        <div v-if="id !== 2" :class="{
            'rounded-xl border md:border-r-0 md:rounded-tl-xl md:rounded-br-none md:rounded-tr-none md:rounded-bl-xl md:border-y md:border-l': id === 1,
            'rounded-xl border md:border-l-0 md:rounded-bl-none md:rounded-tl-none md:rounded-tr-xl md:rounded-br-xl md:border-y md:border-r': id === 3,
        }" class="flex flex-col items-center justify-center max-w-sm mx-4 text-center border-black md:mx-0 lg:my-16">
            <header class="pt-5">
                <IconVue icon="academicons:acm" class="text-black size-16 " />
            </header>
            <div class="px-5 py-5 text-black">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight font-secondary">
                    {{ title }} {{ id }}
                </h5>
                <p class="mb-3 font-normal text-black/80 font-main">
                    {{ description }}
                </p>
            </div>
        </div>
        <div v-else
            class="flex flex-col items-center justify-center max-w-sm mx-4 my-4 text-center md:mx-0 md:my-0 rounded-2xl bg-gradient-to-tr from-primary-bg-brown-gradient to-primary-bg-brown">
            <header class="pt-5">
                <IconVue icon="academicons:acm" class="text-white size-20" />
            </header>
            <div class="px-5 text-white lg:py-16">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight font-secondary">
                    {{ title }} {{ id }}
                </h5>
                <p class="mb-3 font-normal text-white/80 font-main">
                    {{ description }}
                </p>
            </div>
        </div>
    </template>
</template>
