<template>
    <div class="verify">
        <div class="verify-title">
            <h2>-评论管理-</h2>
        </div>
        <div class="veryfy-table">
            <table>
                <thead>
                    <tr>
                        <td><strong>序号</strong></td>
                        <td><strong>用户</strong></td>
                        <td><strong>评论</strong></td>
                        <td><strong>时间</strong></td>
                        <td><strong>文章</strong></td>
                        <td><strong>审核</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in allComments" :key="index">
                        <td>{{ index + 1}}</td>
                        <td>{{ item.user.username }}</td>
                        <td>{{ item.content }}</td>
                        <td>{{ item.createTime }}</td>
                        <td style="text-align:justify">{{ item.article.title }}</td>
                        <td><button @click="verify(index)">通过</button> <button @click="deleteComment(index)">删除</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>

export default {
    name: 'Verify',
    data() {
        return {
            unverifiedComments: []
        }
    },

    mounted() {
        this.getUnverifiedComments()
    },

    computed: {
        allComments() {
            return this.unverifiedComments
        }
    },

    methods: {
        getUnverifiedComments() {
            this.axios.post('/blog/getUnverifiedComments').then((res)=>{
                if (res.status == 200) {
                    this.unverifiedComments = res.data
                }
            })
        },

        verify(index) {
            let data = {
                uuid: this.unverifiedComments[index].uuid
            }
            this.axios.post('/blog/comment/verify', {data:data}).then((res)=>{
                if (res.status == 200) {
                    alert('审核通过')
                    this.unverifiedComments.splice(index, 1)
                    this.$forceUpdate()
                }
            })

        },

        deleteComment(index) {
            let choice = confirm('是否确定删除？')
            if (!choice) {
                return
            }

            let data = {
                uuid: this.unverifiedComments[index].uuid
            }
            this.axios.post('/blog/comment/delete', {data:data}).then((res)=>{
                if (res.status == 200) {
                    alert('删除成功')
                    this.unverifiedComments.splice(index, 1)
                    this.$forceUpdate()
                }
            })

        }
    }
}
</script>


<style scoped>
    .verify {
        text-align: center;
    }

    table {
        border: black 1px solid;
    }

    td {
        width: 300px;
        padding-bottom: 5px;
        padding-top: 5px;
    }
</style>
