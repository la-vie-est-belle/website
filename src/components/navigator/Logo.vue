<template>
    <router-link to='/blog'>
        <img class="logo" :src="currentLogo.pic" :alt="currentLogo.name" width="47" height="47">
    </router-link>
</template>

<script>
import homeLogo from '../../assets/navigator/home-logo.png'
import blogLogo from '../../assets/navigator/blog-logo.png'
import storeLogo from '../../assets/navigator/store-logo.png'
import widgetLogo from '../../assets/navigator/widget-logo.png'
import eggLogo from '../../assets/navigator/egg-logo.png'

export default {
    data() {    
        return {
            logos: {
                home: {name: '仍梦的网站', pic: homeLogo},
                blog: {name: '仍梦的博客', pic: blogLogo},
                store: {name: '仍梦的小店', pic: storeLogo},
                widget: {name: '各个小功能', pic: widgetLogo},
                egg: {name: '网站彩蛋', pic: eggLogo},
            },
        }
    },

    computed: {
        currentLogo() {
            let logo = this.logos[this.$route.path.split('/')[1]]
            return  logo ? logo : this.logos.home
        },
    }
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