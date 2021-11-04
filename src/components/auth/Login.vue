<template>
    <div class="login">
        <div class="frame-bg">
            <div class="form">
                <div>
                    <span><img src="@/assets/auth/account.png" width="18" height="18"></span>
                    <input type="text" placeholder="请输入账号" autofocus required/>
                </div>
                <div>
                    <span><img src="@/assets/auth/password.png" width="18" height="18"></span>
                    <input type="password" placeholder="请输入密码" required/>
                </div>
            </div>
            <div class="forget">
                <a href="javascript:;">忘记密码?</a>
            </div>
            <button class="login-btn">登录</button>
        </div>
    </div> 
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        login() {

        }
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
        top: 45px;
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

    .forget {
        position: relative;
        top: 30px;
        left: 187px;
    }

    .forget a {
        color: #0550c0f1;
        text-decoration: none;
    }
</style>