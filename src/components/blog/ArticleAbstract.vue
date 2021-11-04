<template>
    <div v-for="(item, index) in articles" :key="index" class="article-abstract">
        <div class="title">
            <router-link :to="'/blog/'+(item.id)" @click="addVisitCount(item.uuid)"><h3>{{ item.title }}</h3></router-link>
        </div>
        <div class="intro">
            <p>{{ item.content.replace(regex, '').substring(0, 200).trim() + ' ...' }}</p>
        </div>
        <div class="func">
            <span class="time">{{ item.createTime }}</span>
            <span class="visit"><img src="@/assets/blog/visit.png" width="18" height="13">{{ item.visitCount }}</span>
            <span class="comment"><img src="@/assets/blog/comment.png" width="18" height="13">{{ item.comments.length }}</span>
            <span class="thumb-up"><img src="@/assets/blog/thumb-up.png" width="17" height="15">{{ item.thumbUpCount }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        articles: Array
    },

    data() {
        return {
            regex: /(<([^>]+)>)/ig
        }
    },

    methods: {
         addVisitCount(uuid) {
            let data = {
                uuid: uuid,
            }

            this.axios.post('/blog/article/addVisitCount', {data:data}).then((res)=>{
                if (res.status == 200) {
                    // 更新访问数
                }
            }).catch((err)=>{
                alert(err)
            })
        },
    }
}
</script>

<style scoped>
    .article-abstract {
        width: 700px;
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border: whitesmoke 1px solid;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }

    .intro {
        text-align: justify;
    }

    span {
        padding-right: 20px;
        opacity: 0.7;
    }

    img {
        padding-right: 2px;
    }

    .title:hover {
        opacity: 0.7;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>
