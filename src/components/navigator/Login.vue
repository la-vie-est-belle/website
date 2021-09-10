<template>
    <div class="login">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .login {
        position: fixed;
        right: 200px;
        top: 19px;
    }
    a {
        font-size: 16px;
        text-decoration: none;
        margin-left: 20px;
    }

    a:visited {
        color: #0066ff;
    }
</style>