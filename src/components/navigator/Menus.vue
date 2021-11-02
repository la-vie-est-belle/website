<template>
    <div class="links">
        <router-link :style="item.path==$route.path ? clickedStyle: ''" v-for="item in links" :to="item.path" :key="item.id">{{ item.name }}</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                // {id: 0, path: '/blog', name: '首页'},
                // {id: 1, path: '/blog', name: '博客'},
                // {id: 2, path: '/store', name: '商店'},
                // {id: 3, path: '/widget', name: '功能'},
                // {id: 4, path: '/order', name: '接单'},
                // {id: 5, path: '/donate', name: '捐助名单'},
                // {id: 6, path: '/egg', name: '彩蛋'},
            ],

            clickedStyle: {
                fontWeight: 'bold',
                color: '#0066ff'
            }
        }
    },
}
</script>

<style scoped>
    .links {
        float: left;
        margin-left: 20px;
        margin-top: 19px;
    }

    a {
        color: #2c3e50;
        font-size: 16px;
        margin-right: 20px;
        text-decoration: none;
    }

    a:hover {
        opacity: 0.8;
    }

    a:visited {
        color: #2c3e50;
        font-weight: bold;
    }
</style>