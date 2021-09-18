<template>
    <div class="article-detail">
        <div class="title">
            <h2>快速掌握PyQt5</h2>
            <span class="time">2020-03-27 19:57:14</span>
        </div>
        <hr>
        <div class="content">
            <p>
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
                写在前面：因为太喜欢Python和Qt了，所以想开始慢慢写一些有关PyQt5的知识点。刚开始会介绍各个控件的使用，之后会进行实战操作，相信学完本系列对大家的兼职/外快事业会有帮助。所有的篇章不会有太多冗余，干货最重要。读者当然可以把这系列当作一个工具书来使
            </p>
           
        </div>
        <div class="article-bottom">
            <div class="category">
                <span class="category-item">Python</span>
                <span class="category-item">PyQt5</span>
                <span class="category-item">GUI</span>
            </div>
            <div class="func">
                <span class="visit"><img src="@/assets/blog/visit.png" width="18" height="13">1000</span>
                <span class="comment"><a href="javascript:;"><img src="@/assets/blog/comment.png" width="18" height="14">12</a></span>
                <span class="thumb-up"><a href="javascript:;"><img src="@/assets/blog/thumb-up.png" width="17" height="15">55</a></span>
            </div>
        </div>
        
    </div>
    <div class="comment-area">
        <Comment />
    </div>
</template>

<script>
import Comment from '@/components/blog/Comment.vue'

export default {
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
        margin-top: -10px;
        margin-bottom: 10px;
        border: 0px;
        background-color: whitesmoke;
        height: 0.5px;
    }

    .title {
        display: flex;
        justify-content:space-between;
        align-items: center;
        text-align: left;
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