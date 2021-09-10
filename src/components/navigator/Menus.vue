<template>
    <div class="links">
        <router-link :class="{active: index==currentIndex}" v-for="(item, index) in links" :to="item.path" :key="item.id" @click="go(index)">{{ item.name }}</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            links: [
                {id: 0, path: '/', name: '首页'},
                {id: 1, path: '/blog', name: '博客'},
                {id: 2, path: '/store', name: '商店'},
                {id: 3, path: '/widget', name: '功能'},
                {id: 4, path: '/order', name: '接单'},
                {id: 5, path: '/donate', name: '捐助名单'},
                {id: 6, path: '/egg', name: '网站彩蛋'},
            ]
        }
    },

    methods: {
        go(index) {
            this.currentIndex = index
        }
    }
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

    .active {
        font-weight: bold;
    }
</style>