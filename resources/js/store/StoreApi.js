// ? State management pinia for handle large data procces from backend
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useStoreData = defineStore('Store', () => {
    // ? state
    const data = ref([1, 2, 3])
    // ? getters | Getters same like computed property that usually handle realtime updates
    const DataFilters = computed(() => data.value.filter((i) => i >= 2))
    // ? Methods | Methods same like normaly functions that usually handle changes
    const DataMethods = () => alert(`${DataFilters.value} This is my age`)
    return { data, DataFilters, DataMethods }
})
