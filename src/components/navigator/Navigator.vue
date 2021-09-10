<template>
    <nav>
        <Logo />
        <Menus />
        <Search />
        <div v-if="isLogin">
            <News />
            <Avatar />
        </div>
        <div v-else>
            <Login />
        </div>
    </nav>
</template>

<script>
import Logo from './Logo.vue'
import Menus from './Menus.vue'
import Search from './Search.vue'
import News from './News.vue'
import Avatar from './Avatar.vue'
import Login from './Login.vue'

export default {
    name: 'Navigator',
    data() {
        return {
            isLogin: true
        }
    },

    components: {
        Logo,
        Menus,
        Search,
        News,
        Avatar,
        Login
    }
}
</script>

<style scoped>
    nav {
        border: whitesmoke 1px solid;
        position: absolute;
        top: 0%;
        left: 0%;
        right: 0%;
        width: 100%;
        height: 8%;
        background: white;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }
</style>