<template>
    <div class="article-area">
        <Article/>
        <Article/>
        <Article/>
    </div>
</template>

<script>
import Article from './Article.vue'
export default {
    components: {
        Article
    }
}
</script>

<style scoped>
    .article-area {
        width: 730px;
    }
</style>