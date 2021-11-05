<template>
    <div class="login">
        <router-link to="/auth?login=true">登录</router-link>
        <router-link to="/auth?register=true">注册</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .login {
        position: absolute;
        left: 1140px;
        top: 20px;
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