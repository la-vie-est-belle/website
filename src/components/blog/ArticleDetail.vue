<template>
    <div class="article-detail" v-if="currentArticle">
        <div class="title">
            <div>
                <h2>{{ currentArticle.title }}</h2>
            </div>
            <div class="time-edit">
                <span>{{ currentArticle.createTime }}</span>
                <span v-if="user && user.isAdmin" class="delete"><a href="javascript:;" @click="deleteArticle(currentArticle.uuid)"><img src="@/assets/blog/delete.png" width="18" height="18"></a></span>
                <span v-if="user && user.isAdmin" class="edit"><a href="javascript:;" @click="edit(currentArticle.uuid)"><img src="@/assets/blog/compose.png" width="18" height="18"></a></span>
            </div>
        </div>
        <hr>

        <div class="article-content" v-html="currentArticle.content"></div>
        <br />

        <div class="article-bottom">
            <div class="category">
                <span class="category-item" v-for="(item, index) in currentArticle.categories" :key="index">{{ item.name }}</span>
            </div>
            <div class="func">
                <span class="visit"><img src="@/assets/blog/visit.png" width="18" height="13"> {{ currentArticle.visitCount }}</span>
                <span class="comment"><a href="#comment-area"><img src="@/assets/blog/comment.png" width="18" height="13"> {{ currentArticle.comments.length }}</a></span>
                <span class="thumb-up"><a href="javascript:;" @click="thumbUp(currentArticle.uuid)"><img :style="thumbUpImgStyle" src="@/assets/blog/thumb-up.png" width="17" height="15"> {{ currentArticle.thumbUpCount }}</a></span>
            </div>
        </div>
    </div>
    
    <div class="comment-area" v-if="currentArticle">
        <Comment :articleId="currentArticle.id" />
    </div>
</template>

<script>
import Comment from '@/components/blog/Comment.vue'
import {mapState} from 'vuex'

export default {
    props: {
        articles: Array
    },

    components: {
        Comment
    },

    data() {
        return {
            thumbUpImgStyle: ''
        }
    },

    mounted() {
        document.documentElement.scrollTop = 0;
    },

    methods: {
        edit(uuid) {
            // 编辑文章
            this.$router.push({name:'compose', query:{articleUuid:uuid}})
        },

        thumbUp(uuid) {
            if (!this.user) {
                alert('请先登录')
                this.$router.push('/auth?login=true')
                return
            }
            
            let data = {
                uuid: uuid,
            }

            // 服务器更新点赞数
            this.axios.post('/blog/article/thumbup', {data:data}).then((res)=>{
                if (res.status == 200) {
                    // 前端更新点赞数
                    this.currentArticle.thumbUpCount++
                    this.$forceUpdate()
                    
                    // 点赞样式
                    this.thumbUpImgStyle = 'transform: scale(1.25)'
                    setTimeout(()=>{
                        this.thumbUpImgStyle = ''
                    }, 100)
                }
            }).catch((err)=>{
                alert(err)
            })
        },

        deleteArticle(uuid) {
            let choice = confirm('是否确定删除？')
            if (!choice) {
                return
            }

            let data = {
                uuid: uuid,
            }

            // 服务器删除评论
            this.axios.post('/blog/article/delete', {data:data}).then((res)=>{
                if (res.status == 200) {
                    this.$router.replace('/blog')
                }
            }).catch((err)=>{
                alert(err)
            })
        }
    },

    computed: {
        currentArticle() {
            if (!this.articles) {
                return null
            }
            
            let id = parseInt(this.$route.path.split('/')[2])
            for (let i=0; i<this.articles.length; i++) {
                if (this.articles[i].id != id) {
                    continue
                }
    
                return {
                    id: this.articles[i].id,
                    title: this.articles[i].title,
                    content: this.articles[i].content,
                    createTime: this.articles[i].createTime,
                    thumbUpCount: this.articles[i].thumbUpCount,
                    visitCount: this.articles[i].visitCount,
                    comments: this.articles[i].comments,
                    categories: this.articles[i].categories,
                    uuid: this.articles[i].uuid
                }
            }

            return null
        },

        ...mapState([
            'user'
        ])
    },
}
</script>

<style scoped>
    .article-detail {
        width: 720px;
        text-align: justify;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }

    .article-content >>> img {
        max-width: 100%;
    }

    hr {
        border: 0px;
        background-color: whitesmoke;
        height: 0.5px;
    }
    
    .edit {
        padding-left: 5px;
        float: right;
    }

    .edit:hover {
        transform: scale(1.1);
    }

    .delete {
        padding-left: 20px;
        float: right;
        opacity: 0.5;
    }

    .delete:hover {
        transform: scale(1.1);
    }
    

    .time-edit {
        margin-top: -10px;
    }

    .article-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .category-item {
        cursor: pointer;
        border: whitesmoke 1px solid;
        border-radius: 5px;
        box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.2);
        margin-right: 4px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .category-item:hover {
        font-weight: bold;
    }
    
    .visit, .comment, .thumb-up {
        padding-left: 20px;
        opacity: 0.7;
    }

    .visit:hover, .comment:hover, .thumb-up:hover {
        opacity: 1;
    }

    .func {
        text-align: right;
    }

    a {
        text-decoration: none;
        color: black
    }
</style>