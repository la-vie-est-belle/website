<template>
    <div id="comment-area">
        <div class="total">
            <p>总共有120条评论</p>
        </div>
        <hr>
        <div class="input-and-btn">
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

    .input-and-btn {
        display: flex;
        justify-content: space-between;
    }

    .comment-btn {
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
</style>