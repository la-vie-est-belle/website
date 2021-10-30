<template>
    <div class="blog">
        <div>
            <Introduction />
        </div>
        <div class="content">
            <div class="sidebar">
                <Count :articles="articles" />
                <Category :articles="articles"/>
                <OtherLinks />
            </div>
            <div class="article-area">
                <router-view :articles="articles"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Introduction from '@/components/blog/Introduction.vue'
import Category from '@/components/blog/Category.vue'
import Count from '@/components/blog/Count.vue'
import OtherLinks from '@/components/blog/OtherLinks.vue'

export default {
    name: 'Blog',
    components: {
        Introduction,
        Category,
        Count,
        OtherLinks,
    },

    data() {
        return {
            articles: null,
        }
    },

    mounted() {
        // this.$watch(
        //     () => this.$route.params,
        //     () => {
        //         this.getArticles()
        //     },
        //     { immediate: true}
        // )
        this.getArticles()
    },

    methods: {
        getArticles() {
            this.axios.get('/blog/article').then((res) => {
                if (res.status == 200) {
                    this.articles = res.data
                }
            })
            .catch((error) => console.log(error))
        },
    },
}
</script>

<style scoped>
    .blog {
        width: 100%;
    }

    .content {
        display: flex;
    }

    .sidebar {
        margin-left: 200px;
    }

    .article-area {
        margin-left: 10px;
    }
</style>