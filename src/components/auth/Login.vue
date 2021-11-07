<template>
    <div class="login">
        <div class="frame-bg">
            <form @submit.prevent="login">
                <div class="form">
                    <div>
                        <span><img src="@/assets/auth/account.png" width="18" height="18"></span>
                        <input type="text" placeholder="请输入账号或邮箱" v-model.trim="username" autofocus required/>
                    </div>
                    <div>
                        <span><img src="@/assets/auth/password.png" width="18" height="18"></span>
                        <input type="password" placeholder="请输入密码" v-model.trim="password" required/>
                    </div>
                </div>
                <!-- <div class="forget-link">
                    <router-link to="/auth?forget=true">忘记密码?</router-link>
                </div> -->
                <div class="visitor-link">
                    <router-link to="/blog">游客浏览</router-link>
                </div>
                <button type="submit" class="login-btn">登录</button>
            </form>
        </div>
    </div> 
</template>

<script>
import sha256 from 'crypto-js/sha256'
import {mapMutations} from 'vuex'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },

    methods: {
        login() {
            if (!this.username || !this.password) {
                return
            }

            let data = {
                username: this.username,
                password: sha256(this.password).toString(),
            }

            this.axios.post('/auth/login', {data:data}).then((res)=>{
                if (res.status==200) {
                    if (res.data == 'unverified') {
                        alert('账户未验证，请前往邮箱验证')
                    }
                    else if (res.data == 'no') {
                        alert('账号或密码错误')
                        this.username = ''
                        this.password = ''
                    }
                    else {
                        this.setUser(res.data)
                        this.$router.push('/')
                    }
                }
            }).catch((err)=>{alert(err)})
        },

        ...mapMutations ([
            'setUser'
        ])
    }
}
</script>

<style>
    .login {
        position: relative;
        left: 500px;
        top: 10px;
    }

    .frame-bg {
        width: 500px;
        height: 230px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.4);
        margin-top: 230px;
    }

    .form {
        position: relative;
        top: 35px;
    }

    .form div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .form div span {
        background: lightgray;
        width: 35px;
        height: 27px;
        border: 5px;
        padding-top: 7px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .form input {
        width: 400px;
        height: 30px;
        font-size: 16px;
        padding-left: 5px;
    }

    .login-btn {
        position: relative;
        top: 40px;
        width: 200px;
        height: 35px;
        background-color: #0066ff;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        font-weight: bold;
    }

    .login-btn:hover {
        transform: scale(1.1);
    }

    .login-btn:active {
        background-color: #0550c0f1;
    }

    .forget-link {
        position: relative;
        top: 30px;
        left: 187px;
    }

    .forget-link a {
        color: #0550c0f1;
        text-decoration: none;
    }

    .visitor-link {
        position: relative;
        top: 30px;
        left: -190px;
    }

    .visitor-link a {
        color: #0550c0f1;
        text-decoration: none;
    }
</style>