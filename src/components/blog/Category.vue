<template>
    <div class="category">
        <div class="title">
            <h4>文章分类</h4>
        </div>
        <hr>
        <div class="content" v-for="item in categories" :key="item.id">
            <span class="name">{{ item.name }}</span>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            categories: [
                {id: 0, name: 'Python', num: 10},
                {id: 1, name: 'PyQt5', num: 20},
                {id: 2, name: 'C++', num: 5},
                {id: 3, name: 'Javascript', num: 2},
                {id: 4, name: 'Cocos', num: 10},
                {id: 5, name: 'NodeJS', num: 10},
                {id: 6, name: 'TypeScript', num: 10},
                {id: 7, name: 'PyInstaller', num: 10},
                {id: 8, name: '游戏开发', num: 10},
            ]
        }
    }
}
</script>


<style scoped>
    .category {
        width: 240px;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        float: right;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }

    hr {
        margin-top: -10px;
        margin-bottom: 10px;
        border: 0px;
        background-color: whitesmoke;
        height: 0.5px;
        width: 240px;
    }

    .content {
        cursor: pointer;
        display: inline-block;
        margin-right: 4px;
        margin-bottom: 10px;

        border: whitesmoke 1px solid;
        border-radius: 5px;
        box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.2);
    }

    .name {
        font-size: 14px;
        padding-left: 5px;
        padding-right: 5px;
    }
</style>