<template>
    <div>
        <nav>
            <Logo />
            <Menus />
            <Search />
            <div v-if="isLogin">
                <Avatar />
            </div>
            <div v-else>
                <Login />
            </div>
        </nav>
    </div>
</template>

<script>
import Logo from './Logo.vue'
import Menus from './Menus.vue'
import Search from './Search.vue'
import Avatar from './Avatar.vue'
import Login from './Login.vue'

export default {
    name: 'Navigator',
    data() {
        return {
            isLogin: false
        }
    },

    components: {
        Logo,
        Menus,
        Search,
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