// ? State management pinia for handle large data procces from backend
import { faker } from '@faker-js/faker'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import Api from '@/services/api'
export const useArticle = defineStore('Article', () => {
    // ? state
    const result = ref([]);
    const articles = ref([])
    const ArticleData = ref(Array.from({ length: 3 }, () => ({
        id: Math.round(Math.random() * 10),
        title: "How Mental Health Consultants Can Help",
        description: 'lorem ipsum dolor sit amet, consectetur',
        img: faker.image.urlPlaceholder()
    })))

    const loadArticle = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) console.error('Token not found, user not authenticated.');
            const response = await Api.get('/api/articles', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            return !response.statusText ? console.error(`${response.data.error}`) :
                articles.value = response.data
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    }
    return {
        ArticleData, result, loadArticle, articles

    }
})
