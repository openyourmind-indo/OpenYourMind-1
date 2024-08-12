// ? State management pinia for handle large data procces from backend
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useStoreBrand = defineStore('Brand', () => {
    // ? state
    const BrandsData = ref(Array.from({ length: 4 }, () => 'mdi-light:home'))
    const TestimoniData = ref([
        {
            title: 'Experienced',
            year: '8 +'
        },
        {
            title: 'Teams',
            year: '122 +'
        },
        {
            title: 'Clients',
            year: '563 +'
        },
        {
            title: 'Project Done',
            year: '232 +'
        },
    ])
    return { TestimoniData, BrandsData }
})
