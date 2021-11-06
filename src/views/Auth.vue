<template>
    <div class="auth">
        <div class="auth-title">
            <router-link to="/auth?login=true"><span><h2>&lt; 登录</h2></span></router-link>
            &nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/auth?register=true"><span><h2>注册 &gt;</h2></span></router-link>
        </div>
        <div v-if="$route.query.login">
            <Login />
        </div>
        <div v-else-if="$route.query.register">
            <Register />
        </div>
        <!-- <div v-else-if="$route.query.forget">
            <Forget />
        </div> -->
    </div>
</template>

<script>
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
// import Forget from '@/components/auth/Forget.vue'


export default ({
    data() {
        return {

        }
    },

    components: {
        Login,
        Register,
        // Forget
    }
})
</script>

<style scoped>
    .auth {
        background-image: url('../assets/auth/bg.jpeg');
        background-size: cover;
        min-height: calc(100vh);
        width: 1500px;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    .auth-title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 50px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.4);
        position: relative;
        left: 600px;
        top: 200px;
    }

    .auth-title h2 {
        color: #1b5383;
        
    }

    .auth-title a {
        text-decoration: none;
    }
</style>