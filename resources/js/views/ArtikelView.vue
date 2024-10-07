<script setup>
import { useArticle } from '@/store/article/useArticle';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
const { articles } = storeToRefs(useArticle())
onMounted(() => useArticle().loadArticle());
</script>
<template>
    <div>
        <h1>Articles</h1>
        <ul>
            <li v-for="article in articles" :key="article.id">{{ article.title }} - {{ article.body }} - {{ article.id
                }}</li>
        </ul>
    </div>
</template>
