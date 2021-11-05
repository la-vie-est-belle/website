<template>
    <div class="register">
        <div class="register-frame-bg">
            <form @submit.prevent="register">
                <div class="form">
                    <div>
                        <span><img src="@/assets/auth/account.png" width="18" height="18"></span>
                        <input type="text" placeholder="请输入账号" @blur="checkUsername" v-model.trim="username" autofocus required/>
                    </div>
                    <div>
                        <span><img src="@/assets/auth/email.png" width="19" height="19"></span>
                        <input type="email" placeholder="请输入邮箱" @blur="checkEmail" v-model.trim="email" required/>
                    </div>
                    <div>
                        <span><img src="@/assets/auth/password.png" width="18" height="18"></span>
                        <input type="password" placeholder="请输入密码" v-model.trim="password" required/>
                    </div>
                    <div>
                        <span><img src="@/assets/auth/password.png" width="18" height="18"></span>
                        <input type="password" placeholder="请确认密码" v-model.trim="confirmedPassword" required/>
                    </div>
                </div>
                <button class="register-btn" type="submit">注册</button>
            </form>
        </div>
    </div> 
</template>

<script>
import sha256 from 'crypto-js/sha256'

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmedPassword: ''
        }
    },

    methods: {
        checkUsername() {
            if (!this.username) {
                return
            }
            this.axios.post('/auth/checkUsername', {data:{username:this.username}}).then((res)=>{
                if (res.data == 'no') {
                    alert('用户名已存在')
                }
            }).catch((err)=>{alert(err)})
        },

        checkEmail() {
            if (!this.email) {
                return
            }
            this.axios.post('/auth/checkEmail', {data:{email:this.email}}).then((res)=>{
                if (res.data == 'no') {
                    alert('邮箱已存在')
                    return
                }
            }).catch((err)=>{alert(err)})
        },

        register() {
            if (!this.username || !this.email || !this.password || !this.confirmedPassword) {
                return
            }

            if (this.password != this.confirmedPassword) {
                alert('两次密码输入不一致')
                return
            }

            let data = {
                username: this.username,
                password: sha256(this.password).toString(),
                email: this.email
            }

            this.axios.post('/auth/register', {data: data}).then((res)=>{
                if (res.status == 200 && res.data == 'ok') {
                    alert('注册成功')
                    this.$router.push('/auth?login=true')
                }
                else {
                    alert(res.data)
                }
            }).catch((err)=>{alert(err)})
        }
    }
}
</script>

<style>
    .register {
        position: relative;
        left: 500px;
        top: 10px;
    }

    .register-frame-bg {
        width: 500px;
        height: 330px;
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

    .register-btn {
        position: relative;
        top: 55px;
        width: 200px;
        height: 35px;
        background-color: #0066ff;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        font-weight: bold;
    }

    .register-btn:hover {
        transform: scale(1.1);
    }

    .register-btn:active {
        background-color: #0550c0f1;
    }

</style>