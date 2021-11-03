<template>
    <div class="avatar">
        <a href="javascript:;" @mouseover="showPanel" @mouseout="hidePanel">
            <img src="@/assets/rm_avatar.jpeg" width="40" height="40" alt="头像">
        </a>
    </div>
    <div v-if="isShown" class="avatar-board" @mouseover="showPanel" @mouseout="hidePanel">
        <div><router-link to="/blog/compose" @click="hidePanel()">开始创作</router-link></div>
        <hr>
        <div><router-link to="/blog/draft" @click="hidePanel()">文章草稿</router-link></div>
        <hr>
        <div><router-link to="/blog/verify" @click="hidePanel()">评论管理</router-link></div>
        <hr>
        <div><router-link to="/message" @click="hidePanel()">我的消息</router-link></div>
        <hr>
        <div><a href="javascript:;">个人中心</a></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShown: false,
            timeoutId: null
        }
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
        }
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
</style>