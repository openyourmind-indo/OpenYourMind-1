// ? State management pinia for handle large data procces from backend
import { defineStore } from 'pinia'
import { faker } from '@faker-js/faker';
import { ref } from 'vue'
export const useStoreGallery = defineStore('Gallery', () => {
    // ? state
    const ImageData = ref(Array.from({ length: 8 }, () => ({
        id: Math.random(),
        img: faker.image.avatar()
    })))
    return { ImageData }
})
