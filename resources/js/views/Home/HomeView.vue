<script setup>
import { useStoreData } from '../../store/StoreApi.js'
const store = useStoreData()
const h = () => console.error('hi, ij');
const f = () => console.table('hi clg');
</script>
<template>
    <DefaultLayout>
        <h1 class="text-2xl text-red-600">This is State: {{ store.data }}</h1>
        <ul>
            <li class="text-2xl" v-for="(item, index) in store.DataFilters" :key="index">
                This is Getters: {{ item }}
            </li>
        </ul>
        <Button @actions="h" title="ini clt" class="text-blue-400" />
        <Button @actions="f" title="ini clg" class="text-blue-400" />
    </DefaultLayout>
</template>
