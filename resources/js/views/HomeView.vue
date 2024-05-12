<script setup>
import { useStoreData } from '../store/StoreApi.js'
const store = useStoreData()
</script>
<template>
    <DefaultLayout>
        <h1 class="text-2xl text-red-600">This is State: {{ store.data }}</h1>
        <ul>
            <li class="text-2xl" v-for="(item, index) in store.DataFilters" :key="index">
                This is Getters: {{ item }}
            </li>
        </ul>
    </DefaultLayout>
</template>
