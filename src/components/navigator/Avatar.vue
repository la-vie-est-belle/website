<template>
    <div class="avatar">
        <div @mouseover="showPanel" @mouseout="hidePanel">
            <img v-if="user" :src="`data:image/svg+xml;utf8,${user.avatar}`" width="40" height="40" alt="头像">
        </div>
        <div class="tip" v-if="nums.commentNum || nums.messageNum"> </div>
    </div>
    <div v-if="isShown" class="avatar-board" @mouseover="showPanel" @mouseout="hidePanel">
        <div v-if="user && user.isAdmin"><router-link to="/blog/compose" @click="hidePanel">开始创作</router-link><hr></div>

        <div><router-link to="/self" @click="hidePanel">个人中心</router-link><hr></div>
        
        <div v-if="user && user.isAdmin"><router-link to="/blog/draft" @click="hidePanel">文章草稿 <span class="num" v-if="nums.draftNum">{{ nums.draftNum }}</span></router-link><hr></div>
        
        <div v-if="user && user.isAdmin"><router-link to="/blog/verify" @click="hidePanel">评论管理 <span class="num" v-if="nums.commentNum">{{ nums.commentNum }}</span></router-link><hr></div>
        
        <!-- <div><router-link to="/message" @click="hidePanel">我的消息 <span class="num" v-if="nums.messageNum">{{ nums.messageNum }}</span></router-link><hr></div> -->
        
        <div><router-link to="/blog" @click="clearUser">退出登录</router-link></div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
    data() {
        return {
            isShown: false,
            timeoutId: null,
            nums: {
                draftNum: 0,
                commentNum: 0,
                messageNum: 0
            }
        }
    },

    mounted() {
        if(this.user.isAdmin) {
            this.$watch(
                () => this.$route.params,
                () => {
                    this.getNums()
                }
            )
        }
    },

    computed: {
        ...mapState([
            'user'
        ])
    },

    methods: {
        showPanel() {
            this.isShown = true
            if (this.timeoutId) {
                clearTimeout(this.timeoutId)
                this.timeoutId = null
            }
        },

        hidePanel() {
            this.timeoutId = setTimeout(() => {
                this.isShown = false
            }, 200);
        },

        getNums() {
            // 获取草稿数量、未审核评论数量、以及消息数量
            this.axios.post('/blog/getNums').then((res)=>{
                if (res.status == 200) {
                    let data = res.data
                    this.nums.draftNum = data.draftNum
                    this.nums.commentNum = data.commentNum
                }
            })
        },

        ...mapMutations([
            'clearUser'
        ])
    }
}
</script>

<style scoped>
    .avatar {
        position: absolute;
        top: 10px;
        left: 1190px;
    }

    .avatar-board {
        position: relative;
        top: 15px;
        left: 1150px;
        width: 110px;
        background: white;
        border-radius: 10px;
        margin-top: 50px;
        padding: 5px;
        z-index: 1000;
        font-size: 15px;
    }

    hr {
        border: 0px;
        background-color: whitesmoke;
        height: 0.5px;
        width: 100px;
    }

    .avatar-board a {
        text-decoration: none;
        color: black;
    }

    .tip {
        background: tomato;
        background-image: linear-gradient(-280deg, rgb(252, 29, 29), tomato);
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: relative;
        left: 30px;
        bottom: 15px;
    }

    .num {
        background: tomato;
        color: white;
        font-weight: bold;
        font-size: 10px;
        border-radius: 8px;
        padding-left: 3px;
        padding-right: 3px;
        margin-left: -17px;
        
        position: relative;
        left: 18px;
        bottom: 8px;
    }
</style>