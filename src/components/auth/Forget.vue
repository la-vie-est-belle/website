<template>
    <div class="forget">
        <div class="forget-frame-bg">
            <form @submit.prevent="send">
                <div class="form">
                    <div>
                        <span><img src="@/assets/auth/email.png" width="19" height="19"></span>
                        <input type="text" placeholder="请输入注册时的邮箱" v-model.trim="email" autofocus required/>
                    </div>
                </div>
                <button type="submit" class="send-btn">发送验证</button>
            </form>
        </div>
    </div> 
</template>

<script>

export default {
    data() {
        return {
            email: ''
        }
    },

    methods: {
        send() {
            if (!this.email) {
                return
            }
        }
    }
}
</script>

<style>
    .forget {
        position: relative;
        left: 500px;
        top: 10px;
    }

    .forget-frame-bg {
        width: 500px;
        height: 170px;
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

    .send-btn {
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

    .send-btn:hover {
        transform: scale(1.1);
    }

    .send-btn:active {
        background-color: #0550c0f1;
    }
</style>