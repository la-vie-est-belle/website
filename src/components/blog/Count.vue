<template>
    <div class="count">
        <div class="title">
            <h4>访问统计</h4>
        </div>
        <hr>
        <div class="total">
            <div class="item">
                <p>文章数</p>
                <p><a href="javascript:;">{{ total.article }}</a></p>
            </div>
            <div class="item">
                <p>访问量</p>
                <p><a href="javascript:;">{{ total.visit }}</a></p>
            </div>
            <div class="item">
                <p>点赞数</p>
                <p><a href="javascript:;">{{ total.up }}</a></p>
            </div>
            <div class="item">
                <p>评论数</p>
                <p><a href="javascript:;">{{ total.comment }}</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            total: {
                article: 120,
                visit: 1000,
                up: 258,
                comment:169
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
        color: gray;
        font-weight: bold;
        margin-right: 12px;
    }

    a {
        text-decoration: none;
    }
</style>