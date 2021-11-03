<template>
    <div class="count">
        <div class="title">
            <h4>访问统计</h4>
        </div>
        <hr>
        <div class="total">
            <div class="item">
                <p>文章数</p>
                <p><a href="javascript:;">{{ totalData ? totalData.articleCount : '-' }}</a></p>
            </div>
            <div class="item">
                <p>评论数</p>
                <p><a href="javascript:;">{{ totalData ? totalData.commentCount : '-' }}</a></p>
            </div>
            <div class="item">
                <p>访问量</p>
                <p><a href="javascript:;">{{ totalData ? totalData.visitCount : '-' }}</a></p>
            </div>
            <div class="item">
                <p>点赞数</p>
                <p><a href="javascript:;">{{ totalData ? totalData.thumbUpCount : '-' }}</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        articles: Array
    },

    computed: {
        totalData() {
            if (!this.articles) {
                return
            }
            let articleCount = this.articles.length
            let visitCount = 0
            let thumbUpCount = 0
            let commentCount = 0
            for (let i=0; i<this.articles.length; i++) {
                visitCount += this.articles[i].visitCount
                thumbUpCount += this.articles[i].thumbUpCount
                commentCount += this.articles[i].comments.length
            }
            if (visitCount / 10000 > 1) {
                visitCount = Math.floor(visitCount / 10000) + '万+'
            }

            if (thumbUpCount / 10000 > 1) {
                thumbUpCount = Math.floor(thumbUpCount / 10000) + '万+'
            }

            return {
                articleCount: articleCount,
                visitCount: visitCount,
                thumbUpCount: thumbUpCount,
                commentCount: commentCount
            }
        }
    }
}
</script>

<style scoped>
    .count {
        width: 240px;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 10px;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }

    hr {
        margin-top: -10px;
        margin-bottom: 10px;
        border: 0px;
        background-color: whitesmoke;
        height: 0.5px;
        width: 240px;
    }

    .item {
        display: inline-block;
        font-size: 15px;
        margin-right: 10px;
    }

    a {
        text-decoration: none;
    }
</style>