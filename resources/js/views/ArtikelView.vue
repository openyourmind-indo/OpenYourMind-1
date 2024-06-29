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
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('Token not found, user not authenticated.');
                    return;
                }

                const response = await fetch('/api/articles', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'  // Optional for GET
                    }
                });

                if (!response.ok) {
                    console.error('Failed to fetch articles:', response.statusText);
                    return;
                }

                articles.value = await response.json();
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        });

        return { articles };
    },
};
</script>
