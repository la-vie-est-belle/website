<template>
    <div id="comment-area">
        <div class="total">
            <p>总共有{{ comments.length }}条评论</p>
        </div>
        <hr>
        <div class="input-and-btn">
            <input class="comment-input" placeholder="写下你的评论..." v-model="articleComment" @keydown.enter="commentToArticle">
            <button class="comment-btn" @click="commentToArticle">评论</button>
        </div>
        <br>
        <div class="comment-content" v-for="(parentItem, parentIndex) in allComments" :key="parentItem.id">
            <div v-if="parentItem && !parentItem.parentUuid">
                <div class="first-line">
                    <div class="avatar-name">
                        <span class="avatar"><img :src="`data:image/svg+xml;utf8,${parentItem.user.avatar}`" width="33" height="33"></span>
                        <div class="name-intro">
                            <span class="name"><strong>&nbsp;{{ parentItem.user.username }}</strong></span>
                            <span class="intro">&nbsp;&nbsp;简介：{{ parentItem.user.intro }}</span>
                        </div>
                    </div>
                    <span class="time"><strong>{{ parentItem.createTime }}</strong></span>
                </div>
                <div class="second-line">
                    <span>{{ parentItem.content }}</span>
                </div>
                <div class="third-line">
                    <span class="thumb-up-btn" @click="thumbUp(parentItem.uuid, parentIndex)"><img :style="thumbUpBiggerIndex==parentIndex ? 'transform: scale(1.25)': ''" src="@/assets/blog/thumb-up.png" width="18" height="15"> {{ parentItem.thumbUpCount }}</span>
                    <span class="thumb-down-btn" @click="thumbDown(parentItem.uuid, parentIndex)"><img :style="thumbDownBiggerIndex==parentIndex ? 'transform: scale(1.25)': ''" src="@/assets/blog/thumb-down.png" width="18" height="15"> {{ parentItem.thumbDownCount }}</span>
                    <span class="reply-btn" @click="reply(parentIndex)"><img src="@/assets/blog/comment.png" width="18" height="15"> {{ parentItem['isShown'] ? '取消回复' : '回复' }}</span>
                    <span v-if="user && user.isAdmin" class="delete-btn" @click="deleteComment(parentItem.uuid, parentIndex)"><img src="@/assets/blog/delete.png" width="15" height="15"> 删除</span>
                </div>
                <div class="input-and-btn-reply" v-show="parentItem['isShown']">
                    <input class="comment-input-reply" placeholder="写下你的评论..." v-model="childComment" @keydown.enter="commentToComment(parentItem.uuid)">
                    <button class="comment-btn-reply" @click="commentToComment(parentItem.uuid)">评论</button>
                </div>
            </div>

            <div style="margin-left:39px" class="comment-content" v-for="(childItem, childIndex) in comments" :key="childItem.id">
                <div v-if="childItem.parentUuid && childItem.parentUuid==parentItem.uuid">
                    <div class="first-line">
                        <div class="avatar-name">
                            <span class="avatar"><img :src="`data:image/svg+xml;utf8,${childItem.user.avatar}`" width="33" height="33"></span>
                            <div class="name-intro">
                                <span class="name"><strong>&nbsp;{{ childItem.user.username }}</strong></span>
                                <span class="intro">&nbsp;&nbsp;简介：{{ childItem.user.intro }}</span>
                            </div>
                        </div>
                        <span class="time"><strong>{{ childItem.createTime }}</strong></span>
                    </div>
                    <div class="second-line">
                        <span>{{ childItem.content }}</span>
                    </div>
                    <div class="third-line">
                        <span class="thumb-up-btn" @click="thumbUp(childItem.uuid, childIndex)"><img :style="thumbUpBiggerIndex==childIndex ? 'transform: scale(1.25)': ''" src="@/assets/blog/thumb-up.png" width="18" height="15"> {{ childItem.thumbUpCount }}</span>
                        <span class="thumb-down-btn" @click="thumbDown(childItem.uuid, childIndex)"><img :style="thumbDownBiggerIndex==childIndex ? 'transform: scale(1.25)': ''" src="@/assets/blog/thumb-down.png" width="18" height="15"> {{ childItem.thumbDownCount }}</span>
                        <span class="reply-btn" @click="reply(childIndex)"><img src="@/assets/blog/comment.png" width="18" height="15"> {{ childItem['isShown'] ? '取消回复' : '回复' }}</span>
                        <span v-if="user && user.isAdmin" class="delete-btn" @click="deleteComment(childItem.uuid, childIndex)"><img src="@/assets/blog/delete.png" width="15" height="15"> 删除</span>
                    </div>
                    <div class="input-and-btn-reply" v-show="childItem['isShown']">
                        <input class="child-comment-input-reply" placeholder="写下你的评论..." v-model="childComment" @keydown.enter="commentToComment(parentItem.uuid)">
                        <button class="comment-btn-reply" @click="commentToComment(parentItem.uuid)">评论</button>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    props: {
        articleId: Number
    },

    data() {
        return {
            comments: [],
            articleComment: '',
            childComment: '',
            thumbUpBiggerIndex: null,
            thumbDownBiggerIndex: null,
            thumbUpClickCount: 0,                   // 防止点赞过快
            thumbDownClickCount: 0                  // 防止点踩过快
        }
    },

    mounted() {
        this.getComments()
    },

    computed: {
        allComments() {
            return this.comments
        },

        ...mapState([
            'user'
        ])
    },

    methods: {
        getComments() {
            let data = {
                articleId: this.articleId
            }
            this.axios.post('/blog/getComments', {data: data}).then((res) => {
                if (res.status == 200) {
                    this.comments = res.data
                    for (let i=0; i<this.comments.length; i++) {
                        this.comments[i]['isShown'] = false
                    }
                }
            })
            .catch((err) => console.log(err))
        },

        commentToArticle() {
            if (!this.articleComment) {
                alert('请输入评论内容')
                return
            }

            if (!this.user) {
                alert('请先登录')
                this.$router.push('/auth?login=true')
                return
            }

            let data = {
                username: this.user.username,
                articleId: this.articleId,
                commentContent: this.articleComment
            }

            this.axios.post('/blog/commentToArticle', {data:data}).then((res) => {
                if (res.status == 200) {
                    if (!this.user.isAdmin) {
                        alert('评论成功，将在审核后显示~')
                    }
                    this.articleComment = ''
                    this.getComments()
                }

            }).catch((err) => console.log(err))
            
            // 别忘了socketio显示通知
        },

        commentToComment(uuid) {
            if (!this.childComment) {
                alert('请输入评论内容')
                return
            }

            if (!this.user) {
                alert('请先登录')
                this.$router.push('/auth?login=true')
                return
            }

            let articleId = this.$route.path.split('/')[2]

            // 还要再加个user
            let data = {
                uuid: uuid,
                articleId: articleId,
                username: this.user.username,
                commentContent: this.childComment
            }

            this.axios.post('/blog/commentToComment', {data:data}).then((res) => {
                if (res.status == 200) {
                    if (!this.user.isAdmin) {
                        alert('评论成功，将在审核后显示~')
                    }
                    this.childComment = ''
                    this.getComments()
                }
            }).catch((err) => console.log(err))

            // 别忘了socketio显示通知
        },

        thumbUp(uuid, index) {
            if (!this.user) {
                alert('请先登录')
                this.$router.push('/auth?login=true')
                return
            }

            let data = {
                uuid: uuid,
            }

            // 服务器更新点赞数
            this.axios.post('/blog/comment/thumbup', {data:data}).then((res)=>{
                if (res.status == 200) {
                    // 前端更新点赞数
                    this.allComments[index].thumbUpCount++
                    this.$forceUpdate()
                    
                    // 点赞样式
                    this.thumbUpBiggerIndex = index
                    setTimeout(()=>{
                        this.thumbUpBiggerIndex = null
                    }, 100)

                    // 防止点击过快
                    this.thumbUpClickCount++
                    setTimeout(()=>{
                        if (this.thumbUpClickCount<0) {
                            this.thumbUpClickCount = 0
                        }
                        else {
                            this.thumbUpClickCount--
                        }
                    }, 400)
                    if (this.thumbUpClickCount > 3) {
                        alert('点的太快啦')
                        this.thumbUpClickCount = 0
                    }
                }
            }).catch((err)=>{
                alert(err)
            })
        },

        thumbDown(uuid, index) {
            if (!this.user) {
                alert('请先登录')
                this.$router.push('/auth?login=true')
                return
            }
            
            let data = {
                uuid: uuid,
            }

            // 服务器更新踩数
            this.axios.post('/blog/comment/thumbDown', {data:data}).then((res)=>{
                if (res.status == 200) {
                    // 前端更新踩数
                    this.allComments[index].thumbDownCount++
                    this.$forceUpdate()
                    
                    // 踩样式
                    this.thumbDownBiggerIndex = index
                    setTimeout(()=>{
                        this.thumbDownBiggerIndex = null
                    }, 100)

                    // 防止点击过快
                    this.thumbDownClickCount++
                    setTimeout(()=>{
                        if (this.thumbDownClickCount<0) {
                            this.thumbDownClickCount = 0
                        }
                        else {
                            this.thumbDownClickCount--
                        }
                    }, 400)
                    if (this.thumbDownClickCount > 3) {
                        alert('点的太快啦')
                        this.thumbDownClickCount = 0
                    }
                }
            }).catch((err)=>{
                alert(err)
            })
        },

        reply(index) {
            for (let i=0; i<this.comments.length; i++) {
                if (i == index) {
                    if (this.comments[i]['isShown']) {
                        this.comments[i]['isShown'] = false
                    }
                    else {
                        this.comments[i]['isShown'] = true
                    }
                    
                }
                else {
                    this.comments[i]['isShown'] = false
                }
            }
        },

        deleteComment(uuid, index) {
            let choice = confirm('是否确定删除？')
            if (!choice) {
                return
            }

            let data = {
                uuid: uuid,
            }

            // 服务器删除评论
            this.axios.post('/blog/comment/delete', {data:data}).then((res)=>{
                if (res.status == 200) {
                    this.allComments.splice(index, 1)
                    this.$forceUpdate()
                }
            }).catch((err)=>{
                alert(err)
            })
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

    .child-comment-input-reply {
        width: 565px;
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
        padding-bottom: 1px;
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

    .name-intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        top: -2px;
    }

    .name-intro .intro {
        font-size: 5px;
    }

    .second-line, .third-line {
        padding-left: 39px;
        padding-bottom: 10px;
        position: relative;
        top: 5px;
    }

    .third-line span {
        padding-right: 10px;
        position: relative;
        top: -3px;
    }

    .input-and-btn-reply {
        display: flex;
        justify-content: space-between;
    }

    .thumb-up-btn, .thumb-down-btn, .reply-btn, .delete-btn {
        cursor: pointer;
    }
</style>