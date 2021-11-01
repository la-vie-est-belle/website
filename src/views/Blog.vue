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
                <pagination :hide-on-single-page="false" :page-size="[2, 10, 20, 40] " @current-change="handleCurrentChange" :current-page="pageNum" 
                               layout="total, prev, pager, next, jumper" :total="10"></pagination>
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
            pageNum: 10,
            pageSize: 10
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
            this.axios.get('/blog/getArticles').then((res) => {
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