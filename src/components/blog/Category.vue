<template>
    <div class="category">
        <div class="title">
            <h4>文章分类</h4>
        </div>
        <hr>
        <div v-if="categories">
            <div class="card" v-for="item in categories" :key="item.id" @click="getSpecificArticles(item.name)">
                <span class="name">{{ item.name }}</span>
                <span>{{ item.articles.length }}篇</span>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            categories: null
        }
    },

    mounted() {
        this.getCategories()
    },

    methods: {
        getCategories() {
            this.axios.get('/blog/getCategories').then((res) => {
                if (res.status == 200) {
                    this.categories = res.data
                }
            })
            .catch((error) => console.log(error))
        },

        getSpecificArticles(name) {
            let data = {
                name: name
            }

            this.axios.post('/blog/getSpecificArticles', {data:data}).then((res)=>{
                if (res.status == 200) {
                    this.$emit('specific', res.data)
                }
            })
        }
    },
}
</script>


<style scoped>
    .category {
        width: 240px;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 10px;
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

    .card {
        cursor: pointer;
        margin-right: 4px;
        margin-bottom: 10px;

        border: whitesmoke 1px solid;
        border-radius: 5px;
        box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.2);

        display: flex;
        justify-content: space-between;

        padding-left: 20px;
        padding-right: 20px;
    }

    .card:hover {
        transform: scale(1.1);
        font-weight: bold;
    }

    .name {
        font-size: 17px;
    }
</style>