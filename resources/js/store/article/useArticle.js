// ? State management pinia for handle large data procces from backend
import { faker } from '@faker-js/faker'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useArticle = defineStore('Article', () => {
    // ? state
    const ArticleData = ref(Array.from({ length: 3 }, () => ({
        id: Math.random(),
        title: "How Mental Health Consultants Can Help",
        description: 'lorem ipsum dolor sit amet, consectetur',
        img: faker.image.urlPlaceholder()
    })))
    return { ArticleData }
})
