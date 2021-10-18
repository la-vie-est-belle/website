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
        <div class="comment-content" v-for="(item, index) in comments" :key="item.id">
            <div class="first-line">
                <div class="avatar-name">
                    <span class="avatar"><img :src="item.user.avatar" width="30" height="30"></span>
                    <span class="name"><strong>&nbsp;{{ item.user.username }}</strong></span>
                </div>
                <span class="time"><strong>{{ item.createTime }}</strong></span>
            </div>
            <div class="second-line">
                <span>{{ item.content }}</span>
            </div>
            <div class="third-line">
                <span class="thumb-up-btn" @click="thumbUp()"><img src="@/assets/blog/thumb-up.png" width="18" height="15"> {{ item.thumbUpCount }}</span>
                <span class="thumb-down-btn" @click="thumbDown()"><img src="@/assets/blog/thumb-down.png" width="18" height="15"> {{ item.thumbDownCount }}</span>
                <span class="reply-btn" @click="reply(index)"><img src="@/assets/blog/comment.png" width="18" height="15"> {{ item['isShown'] ? '取消回复' : '回复' }}</span>
                <span class="delete-btn" @click="deleteComment()"><img src="@/assets/blog/delete.png" width="15" height="15"> 删除</span>
            </div>
            <div class="input-and-btn-reply" v-show="item['isShown']">
                <input class="comment-input-reply" placeholder="写下你的评论...">
                <button class="comment-btn-reply">评论</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comments: []
        }
    },

    mounted() {
        this.getComments()
    },

    methods: {
        getComments() {
            let articleId = this.$route.path.split('/')[2]
            this.axios.get('/blog/comment', {params:{articleId: articleId}}).then((res) => {
                if (res.status == 200) {
                    this.comments = res.data
                    console.log(res.data)

                    for (let i=0; i<this.comments.length; i++) {
                        this.comments[i]['isShown'] = false
                    }
                    console.log(this.comments)
                }
            })
            .catch((error) => console.log(error))
        },

        thumbUp() {
            console.log(this.comments)
            console.log('点赞')
        },

        thumbDown() {
            console.log('踩')
        },

        reply(id) {
            this.comments[id]['isShown'] = this.comments[id]['isShown'] ? false : true
        },

        deleteComment() {
            console.log('删除')
        },
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

    .comment-content {
        padding-bottom: 5px;
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
        padding-left: 35px;
        padding-bottom: 10px;
    }

    .third-line span {
        padding-right: 10px;
    }

    .input-and-btn-reply {
        display: flex;
        justify-content: space-between;
    }

    .thumb-up-btn, .thumb-down-btn, .reply-btn, .delete-btn {
        cursor: pointer;
    }
</style>