<template>
    <div class="draft">
        <div><h2>-文章草稿-</h2></div>
        <div class="draft-table">
            <table>
                <thead>
                    <tr>
                        <td><strong>序号</strong></td>
                        <td><strong>标题</strong></td>
                        <td><strong>时间</strong></td>
                        <td><strong>操作</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in allDrafts" :key="index">
                        <td>{{ index + 1}}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.createTime }}</td>
                        <td><button @click="edit(item.uuid)">编辑</button> <button @click="deleteDraft(index)">删除</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default ({
    data() {
        return {
            drafts: []
        }
    },

    mounted() {
        this.getDrafts()
    },

    computed: {
        allDrafts() {
            return this.drafts
        }
    },

    methods: {
        edit(uuid) {
            // console.log(index)
            this.$router.push({name:'compose', query:{draftUuid:uuid}})
        },

        getDrafts() {
            this.axios.post('/blog/getDrafts').then((res)=>{
                if (res.status == 200) {
                    console.log(res.data)
                    this.drafts = res.data
                }
            })
        },

        deleteDraft(index) {
            let choice = confirm('是否确定删除？')
            if (!choice) {
                return
            }

            let data = {
                uuid: this.drafts[index].uuid
            }
            this.axios.post('/blog/draft/delete', {data:data}).then((res)=>{
                if (res.status == 200) {
                    alert('删除成功')
                    this.drafts.splice(index, 1)
                    this.$forceUpdate()
                }
            })
        }
    }
})
</script>

<style scoped>
    .draft {
        text-align: center;
        min-height: calc(100vh);
    }

    table {
        border: black 1px solid;
    }

    td {
        width: 400px;
        padding-bottom: 5px;
        padding-top: 5px;
    }

    /* .draft-info {
        display: flex;
        justify-content: center;
    } */

    /* .draft-info div {
        width: 300px;
    } */
</style>
