<script setup>
defineProps({
    data: {
        type: [Object, Array],
        required: true
    }
})
</script>
<template>
    <div v-for="({ title, description, price, id }) in data" :key="id"
        class="grid max-w-xs mb-4 border-2 border-black lg:grid-cols-2 lg:max-w-5xl rounded-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 place-self-start">
            <div class="flex flex-row items-center gap-8 py-4">
                <input checked id="checked-checkbox" type="checkbox" value=""
                    class="ml-8 text-blue-600 bg-gray-100 border-gray-300 rounded size-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <div class="">
                    <h1 class="text-lg font-semibold font-secondary">
                        {{ title }}
                    </h1>
                    <p class="text-sm font-normal font-secondary">
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>
        <div
            class="pl-6 text-3xl font-bold lg:self-center lg:pl-0 lg:pr-4 place-self-center font-secondary text-primary-title lg:place-self-end">
            {{ price }} <span class="text-sm">Month</span>
        </div>
    </div>
</template>
