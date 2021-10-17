<template>
    <div id="comment-area">
        <div class="total">
            <p>总共有{{ comments.length }}条评论</p>
        </div>
        <hr>
        <div class="input-and-btn">
            <input class="comment-input" placeholder="写下你的评论...">
            <button class="comment-btn">评论</button>
        </div>
        <br>
        <div class="comment-content">
            <div class="first-line">
                <div class="avatar-name">
                    <span class="avatar"><img src="" width="32" height="32"></span>
                    <span class="name"><strong>仍梦</strong></span>
                </div>
                <span class="time"><strong>2020-04-13</strong></span>
            </div>
            <div class="second-line">
                <span>la sed facilis cumque aut quae debitis praesentium rer</span>
            </div>
            <div class="third-line">
                <span class="thumb-up-btn"><img src="" width="20" height="20"> 20</span>
                <span class="thumb-down-btn"><img src="" width="20" height="20"> 5</span>
                <span class="reply-btn"><img src="" width="20" height="20"> 回复</span>
                <span class="reply-btn"><img src="" width="20" height="20"> 删除</span>
            </div>
            <div class="input-and-btn-reply">
                <input class="comment-input-reply" placeholder="写下你的评论...">
                <button class="comment-btn-reply">评论</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comments: Array
    }
}
</script>

<style scoped>
    #comment-area {
        width: 720px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.2);
        text-align: left;
        margin-top: 10px;
    }

    hr {
        margin-top: -10px;
        margin-bottom: 10px;
        border: 0px;
        background-color: whitesmoke;
        height: 0.5px;
    }

    .comment-input {
        width: 630px;
        height: 30px;
    }

    .comment-input-reply {
        width: 600px;
        height: 30px;
        margin-left: 30px;
    }

    .input-and-btn {
        display: flex;
        justify-content: space-between;
    }

    .comment-btn, .comment-btn-reply {
        width: 70px;
        height: 35px;
        background-color: #0066ff;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 15px;
        font-weight: bold;
    }

    .comment-btn:hover {
        transform: scale(1.1);
    }

    .comment-btn:active {
        background-color: #0550c0f1;
    }

    .first-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .avatar-name {
        display: flex;
        align-items: center;
    }

    .second-line, .third-line {
        padding-left: 30px;
        padding-bottom: 10px;
    }

    .third-line span {
        padding-right: 10px;
    }

    .input-and-btn-reply {
        display: flex;
        justify-content: space-between;
    }

</style>