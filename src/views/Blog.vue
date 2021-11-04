<template>
    <div class="blog">
        <div>
            <Introduction />
        </div>
        <div class="content">
            <div class="sidebar">
                <Count :articles="articles" />
                <Category @specific="setSpecificArticles" />
                <OtherLinks />
            </div>
            <div class="article-area">
                <a class="all-articles" href="javascript:;" @click="showAllArticles">全部文章</a>
                <router-view :articles="articles"></router-view>
                <!-- <pagination :hide-on-single-page="false" :page-size="[2, 10, 20, 40] " @current-change="handleCurrentChange" :current-page="pageNum" 
                               layout="total, prev, pager, next, jumper" :total="10"></pagination> -->
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
        this.$watch(
            () => this.$route.params,
            () => {
                this.getArticles()
            },
            {immediate: true}
        )
    },

    methods: {
        showAllArticles() {
            // 如果在/blog页面点了分类，那如果要显示全部的文章，则需要调用getArticles()
            if (this.$route.path == '/blog') {
                this.getArticles()
            }
            // 如果是在其他页面，只用跳到/blog处就行，因为watch在检测，会自动调用getArticles()
            else {
                this.$router.push('/blog')
            }
        },

        getArticles() {
            this.axios.get('/blog/getArticles').then((res) => {
                if (res.status == 200) {
                    this.articles = res.data
                }
            })
            .catch((error) => console.log(error))
        },

        setSpecificArticles(data) {
            this.articles = data
            this.$router.push('/blog')
        }
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
    
    .all-articles {
        float: right;
        position: relative;
        top:  -28px;
        text-decoration: none;
        color: black;
        background: white;
        box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.2);
        padding-left: 10px;
        padding-right: 10px ;
        border-radius: 5px;
        font-size: 14px;        
    }
</style>