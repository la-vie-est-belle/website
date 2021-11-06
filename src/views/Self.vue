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
                <p>今天是你来的第{{ days }}天</p>
            </div>
            <div class="beautiful-sentence">
                <p>{{ motto }}</p>
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
            days: 0,
            motto: ''
        }
    },

    mounted () {
        // 计算注册时间和现在的时间差
        this.getDays()
        this.getMotto()
    },

    methods: {
        getDays() {
            if (!this.user) {
                return
            }

            let s1 = new Date(this.user.createTime.split(' ')[0]);
            let s2 = new Date();    //当前日期：2017-04-24
            let d = s2.getTime() - s1.getTime();
            this.days = parseInt(d / (1000 * 60 * 60 * 24)) + 1;
        },

        getMotto() {
            let mottos = ['今日事，今日毕。', '为中华之崛起而读书。', '业精于勤，荒于嬉；行成于思，毁于随。', '知之者不如好之者，好之者不如乐之者。',
                          '学而不思则罔，思而不学则殆。', '我这个人走得很慢，但是我从不后退。', '天下之事常成于困约，而败于奢靡。', '抛弃时间的人，时间也抛弃他。',
                          '最困难的事情就是认识自己。']
            let index = Math.floor(Math.random() * mottos.length)
            this.motto = mottos[index]
        },

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
