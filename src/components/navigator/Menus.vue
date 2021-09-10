<template>
    <div class="links">
        <router-link to="/">首页</router-link>
        <router-link to="/blog">博客</router-link>
        <router-link to="/store">商店</router-link>
        <router-link to="/download">下载</router-link>
        <router-link to="/need">接单</router-link>
        <router-link to="/donate">捐助名单</router-link>
        <router-link to="/egg">网站彩蛋</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .links {
        float: left;
        margin-left: 20px;
        margin-top: 19px;
    }

    a {
        font-size: 16px;
        margin-right: 20px;
        text-decoration: none;
    }

    a:visited {
        color: #0066ff;
    }
</style>