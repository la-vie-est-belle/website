<template>
    <div class="article">
        <div class="title">
            <h3>快速掌握PyQt5</h3>
        </div>
        <div class="abstract">
            <p>写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使用，希望能帮到大家。注：</p>
        </div>
        <div class="func">
            <span class="time">2020-03-27 19:57:14</span>
            <span class="visit"><img src="@/assets/blog/visit.png" width="18" height="13">1000</span>
            <span class="comment"><img src="@/assets/blog/comment.png" width="18" height="13">12</span>
            <span class="thumb-up"><img src="@/assets/blog/thumb-up.png" width="17" height="17">55</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        abstract: String,
        publishTime: String,
        visitCount: Number,
        commentCount: Number,
        thumbUpCount: Number
    }
}
</script>

<style scoped>
    .article {
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }

    span {
        padding-right: 20px;
        opacity: 0.7;
    }

    img {
        padding-right: 2px;
    }
</style>
