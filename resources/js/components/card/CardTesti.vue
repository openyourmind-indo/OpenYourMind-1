<script setup>
defineProps({
    data: {
        type: [Object, Array],
        required: true
    }
})
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center gap-x-1">
        <div v-for="({ title, description, img, id }) in data" :key="id"
            class="grid max-w-sm mb-4 text-center shadow lg:mb-0 rounded-2xl bg-primary-main place-items-center place-content-center dark:bg-gray-800 dark:border-gray-700">
            <a href="#" class="py-6">
                <img class="rounded-full place-self-center size-24" :src="img" :alt="title" />
            </a>
            <div class="p-5">
                <p class="mb-3 font-normal text-white font-main">
                    Open your mind adalah salah satu salah satu, yang terbaik untuk memberikan sebuah sebuah contoh dumy
                    text. kita berharap bisa menjadi open your mind.
                </p>
                <p class="text-lg text-white font-secondary">
                    {{ title }}
                </p>
            </div>
        </div>
    </div>
</template>
