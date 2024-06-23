// ? State management pinia for handle large data procces from backend
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useStoreBrand = defineStore('Brand', () => {
    // ? state
    const BrandsData = ref([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
    ])
    return { BrandsData }
})
