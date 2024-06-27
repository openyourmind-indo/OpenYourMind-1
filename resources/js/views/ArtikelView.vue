<template>
    <div>
        <h1>Articles</h1>
        <ul>
            <li v-for="article in articles" :key="article.id">{{ article.title }} - {{ article.body }}</li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const articles = ref([]);

        onMounted(async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token not found, user not authenticated.');
                return;
            }

            const response = await fetch('/api/articles', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                console.error('Failed to fetch articles:', response.statusText);
                return;
            }

            articles.value = await response.json();
        });

        return { articles };
    },
};
</script>
