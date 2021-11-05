<template>
    <h2>-个人中心-</h2>
    <div class="self" v-if="user">
        <div class="self-avatar">
            <img :src="`data:image/svg+xml;utf8,${user.avatar}`" width="200" height="200" alt="头像">
            <div><a href="javascript:;" @click="changeAvatar">修改头像</a></div>
        </div>
        <div class="self-info">
            <div class="self-edit">
                <div class="self-username"><span>账号：</span><input type="text" :value="user.username" disabled/></div>
                <div class="self-intro"><span>简介：</span><input type="text" v-model.trim="intro" :disabled="isIntroDisabled" /><span><a href="javascript:;" @click="changeDisabledState">&nbsp;{{ isIntroDisabled ? '点击修改' : '确认修改' }}</a></span></div>
                <!-- <div class="self-password"><span>密码：</span><input type="text" v-model.trim="newPassword" :disabled="isPasswordDisabled" /><span><a href="javascript:;" @click="changeDisabledState">&nbsp;{{ isPasswordDisabled ? '点击修改' : '确认修改' }}</a></span></div> -->
            </div>
            <div class="self-days">
                <p>今天是你来的第{{ howMany }}天</p>
            </div>
            <div class="beautiful-sentence">
                <p>今日事，今日毕。</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default ({
    data() {
        return {
            isIntroDisabled: true,
            howMany: 1
        }
    },

    mounted () {
        // 计算注册时间和现在的时间差
    },

    methods: {
        changeAvatar() {
            let data = {
                username: this.user.username
            }
            this.axios.post('/auth/newAvatar', {data:data}).then((res)=>{
                if (res.status == 200) {
                    this.setAvatar(res.data)
                }
            })
        },

        changeDisabledState() {
            // input是否可以编辑
            this.isIntroDisabled = !this.isIntroDisabled
            if (this.isIntroDisabled) {
                if (!this.intro) {
                    alert('简介不能为空')
                    this.isIntroDisabled = false
                    return
                }
                if (this.intro.length > 15) {
                    alert('简介太长啦')
                    this.isIntroDisabled = false
                    return
                } 

                // 发送服务器修改文本
                let data = {
                    intro: this.intro,
                    username: this.user.username
                }
                this.axios.post('/auth/changeIntro', {data:data}).then((res)=>{
                    if (res.status == 200) {
                        alert('修改成功')
                    }
                })
            }
        },

        ...mapMutations([
            'setAvatar',
            'setIntro'
        ])
    },

    computed: {
        ...mapState([
            'user'
        ]),

        intro: {
            get() {
                if (this.user) {
                    return this.user.intro
                }
                return null
            },
            set(val) {
                this.setIntro(val)
            }
        }
    }
})
</script>

<style scoped>
    .self {
        display: flex;
        justify-content: center;
        align-items:flex-start;
        min-height: calc(100vh);
        position: relative;
        top: 10px
    }

    .self-avatar {
        padding: 20px;
        padding-bottom: 10px;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
        position: relative;
        right: 0px;
    }

    .self-edit {
        text-align: left;
        padding: 20px;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
        position: relative;
        left: 25px;
    }

    .self-username, .self-motto {
        padding-top: 1px;
        padding-bottom: 1px;
    }

    .self-days, .beautiful-sentence {
        padding: 8px;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
        position: relative;
        left: 25px;
        top: 10px;
    }

    .beautiful-sentence {
        top: 20px;
    }

    a {
        text-decoration: none;
    }

    input {
        padding-left: 5px;
        width: 100px;
    }
</style>
