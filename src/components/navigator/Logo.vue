<template>
    <router-link to='/'>
        <img class="logo" src="@/assets/blog-logo.png" alt="仍梦的博客" width="50" height="50">
    </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
    .logo {
        float: left;
        margin-left: 200px;
        margin-top: 5px;
    }

    .logo:hover {
        transform: scale(1.1);
    }
</style>