<template>
    <div class="search-result">
        <div><h2>-搜索结果-</h2></div>
        <div class="search-abstract">
            <ArticleAbstract :articles="articles" />
        </div>
    </div>
</template>


<script>
import ArticleAbstract from '@/components/blog/ArticleAbstract.vue'


export default ({
    data() {
        return {
            articles: null
        }
    },

    components: {
        ArticleAbstract
    },

    mounted () {
        this.$watch(
            () => this.$route.query,
            () => {
                this.getResult()
            },
            {immediate: true}
        )
    },

    methods: {
        getResult() {
            let kw = this.$route.query.kw
            if (kw) {
                let data = {
                    kw: kw
                }
                this.axios.post('/search', {data:data}).then((res)=>{
                    if (res.status == 200) {
                        this.articles = res.data
                    }
                })
            }
        }
    }
})
</script>


<style scoped>
    .search-result {
        min-height: calc(100vh);
    }

    .search-abstract {
        position: relative;
        left: 350px;
    }
</style>
