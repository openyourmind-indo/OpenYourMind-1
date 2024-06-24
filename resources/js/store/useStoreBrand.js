// ? State management pinia for handle large data procces from backend
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useStoreBrand = defineStore('Brand', () => {
    // ? state
    const BrandsData = ref(Array.from({ length: 4 }, () => 'mdi-light:home'))
    return { BrandsData }
})
