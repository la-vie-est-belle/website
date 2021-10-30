<template>
    <div class="article-detail">
        <div class="title">
            <div>
                <h2>{{ currentArticle.title }}</h2>
            </div>
            <div class="time-edit">
                <span>{{ currentArticle.createTime }}</span>
                <span class="edit"><router-link to="/blog/compose"><img src="@/assets/blog/compose.png" width="18" height="18"></router-link></span>
            </div>
        </div>
        <hr>

        <div class="content" v-html="currentArticle.content"></div>
        <br />

        <div class="article-bottom">
            <div class="category">
                <span class="category-item">Python</span>
                <span class="category-item">PyQt5</span>
                <span class="category-item">GUI</span>
            </div>
            <div class="func">
                <span class="visit"><img src="@/assets/blog/visit.png" width="18" height="13">{{ currentArticle.visitCount }}</span>
                <span class="comment"><a href="#comment-area"><img src="@/assets/blog/comment.png" width="18" height="14">{{ currentArticle.comments.length }}</a></span>
                <span class="thumb-up"><a href="javascript:;"><img src="@/assets/blog/thumb-up.png" width="17" height="15">{{ currentArticle.thumbUpCount }}</a></span>
            </div>
        </div>
    </div>
    
    <div class="comment-area">
        <Comment :comments="currentArticle.comments" />
    </div>
</template>

<script>
import Comment from '@/components/blog/Comment.vue'

export default {
    props: {
        articles: Array
    },

    computed: {
        currentArticle() {
            let index = parseInt(this.$route.path.split('/')[2]) - 1
            return {
                title: this.articles[index].title,
                content: this.articles[index].content,
                createTime: this.articles[index].createTime,
                thumbUpCount: this.articles[index].thumbUpCount,
                visitCount: this.articles[index].visitCount,
                comments: this.articles[index].comments,
            }
        }
    },

    components: {
        Comment
    }
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

    .func {
        text-align: right;
    }

    a {
        text-decoration: none;
    }

</style>