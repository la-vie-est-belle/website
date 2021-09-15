<template>
    <div class="comment">
        <div class="total">
            <p>总共有120条评论</p>
        </div>
        <hr>
        <div>
            <img src="" width="30" height="30" class="avatar">
            <input class="comment-input" placeholder="写下你的评论...">
            <button class="comment-btn">评论</button>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
    .comment {
        width: 720px;
        padding-left: 20px;
        padding-right: 20px;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.2);
    }

    hr {
        margin-top: -10px;
        margin-bottom: 10px;
        border: 0px;
        background-color: whitesmoke;
        height: 0.5px;
    }
</style>