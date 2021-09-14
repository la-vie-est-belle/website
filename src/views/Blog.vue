<template>
    <div class="blog">
        <div>
            <Introduction />
        </div>
        <div class="content">
            <div class="sidebar">
                <Category />
                <Count />
            </div>
            <div class="article-area">
                <ArticleArea />
            </div>
        </div>
        
    </div>
</template>

<script>
import Introduction from '@/components/blog/Introduction.vue'
import Category from '@/components/blog/Category.vue'
import Count from '@/components/blog/Count.vue'
import ArticleArea from '@/components/blog/ArticleArea.vue'

export default {
    name: 'Blog',
    components: {
        Introduction,
        Category,
        Count,
        ArticleArea
    }
}
</script>

<style scoped>
    .blog {
        width: 100%;
    }

    .sidebar {
        float: left;
        margin-left: 200px;
    }

    .article-area {
        float: right;
        margin-right: 102px;
    }
</style>