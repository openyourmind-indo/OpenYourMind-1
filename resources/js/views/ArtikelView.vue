<template>
    <div>
        <h1>Articles</h1>
        <ul>
            <li v-for="article in articles" :key="article.id">{{ article.title }} - {{article.body}}</li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const articles = ref([]);

        onMounted(async () => {
            const response = await fetch('/api/articles');
            articles.value = await response.json();
        });

        return { articles };
    },
};
</script>
