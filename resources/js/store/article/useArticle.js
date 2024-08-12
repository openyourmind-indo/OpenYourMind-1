// ? State management pinia for handle large data procces from backend
import { faker } from '@faker-js/faker'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useArticle = defineStore('Article', () => {
    // ? state
    const result = ref([]);

    const ArticleData = ref(Array.from({ length: 3 }, () => ({
        id: Math.round(Math.random() * 10),
        title: "How Mental Health Consultants Can Help",
        description: 'lorem ipsum dolor sit amet, consectetur',
        img: faker.image.urlPlaceholder()
    })))
    // const ArticleData = ref([
    //     {
    //         id: 1,
    //         title: "How Mental Health Consultants Can Help",
    //         description: 'lorem ipsum dolor sit amet, consectetur',
    //         img: faker.image.urlPlaceholder()
    //     },
    //     {
    //         id: 2,
    //         title: "How Mental Health Consultants Can Help",
    //         description: 'lorem ipsum dolor sit amet, consectetur',
    //         img: faker.image.urlPlaceholder()
    //     },
    //     {
    //         id: 3,
    //         title: "How Mental Health Consultants Can Help",
    //         description: 'lorem ipsum dolor sit amet, consectetur',
    //         img: faker.image.urlPlaceholder()
    //     },
    // ])
    return { ArticleData, result }
})
