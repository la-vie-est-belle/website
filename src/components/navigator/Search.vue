<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="请输入搜索内容" v-model.trim="keyword" @keyup.enter="search">
        <router-link @click="search" to="/search">
            <img src="@/assets/navigator/search.png" class="search-icon">
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: '',
        }
    },

    methods: {
        search() {
            if (this.keyword && this.keyword != this.$route.query.kw) {
                this.$router.push({path: '/search', query: {kw: this.keyword}})
            }
            this.keyword = ''
        }
    }
}
</script>

<style scoped>
    .search {
        float: left;
        margin-left: 10px;
    }

    .search-input {
        padding-left: 10px;
        padding-right: 40px;
        margin-top: 14px;
        width: 300px;
        height: 30px;
        border-radius: 20px;
        border: lightgray 1px solid;
        font-size: 15px;
    }

    .search-icon {
        position: relative;
        top: 4px;
        right: 30px;
        width: 20px;
        height: 20px;
        background: url('../../assets/navigator/search.png') no-repeat;
        background-size: 20px 20px;
        background-position: right;
        z-index: 2;
    }
</style>