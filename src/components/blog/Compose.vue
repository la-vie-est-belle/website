<template>
    <div class="compose">
        <div class="compose-title">
            <input class="compose-title-input" placeholder="请输入标题" v-model="title">
            <button class="compose-save-btn">保存草稿</button>
            <button class="compose-publish-btn" @click="publish">发布文章</button>
        </div>
        <div class="compose-editor">
            <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
        </div>
        <br>
        <div id="compose-category">
            <div>
                <span class="category-item" v-for="(item, index) in EnteredCategories" :key="index">{{ item }} <a class="category-close" href="#compose-category">×</a></span>
            </div>
            <br>
            <input class="category-input" type="text" placeholder="请输入文章分类" v-model="category" @keyup.enter="enterCategory">
        </div>
        <br>
    </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'

export default {
    data() {
        return {
            title: '',
            content: '',
            editor: ClassicEditor,
            editorConfig: {
                language: 'zh-cn',
                placeholder: 'This is where dream starts...',
            },
            categoryArray: [],
            category: ''
        }
    },

    components: {
        ckeditor: CKEditor.component
    },

    methods: {
        publish() {
            // 发布文章
            if (!this.title) {
                alert('请输入文章标题')
                return
            }
        
            if (!this.content) {
                alert('请输入文章内容')
                return
            }

            // 检查是否有输入没类，没有的话则定位到底部
            if (!this.categoryArray.length) {
                alert('请输入分类')
                document.documentElement.scrollTop = 100000;
                return
            }

            // 将文章信息发送到服务端存储
            let articleData = {
                'title': this.title,
                'content': this.content,
                'categoryArray': this.categoryArray
            }

            this.axios.post('/blog/publish', {data:articleData}).then((res)=>{
                console.log(res)
            })
        },

        enterCategory() {
            if (!this.category) {
                return
            }

            if(this.category.length > 10) {
                alert('分类名称过长')
                return
            }
            
            if (this.categoryArray.length > 10) {
                alert('最多输入10个分类')
                return
            }

            this.categoryArray.push(this.category)
            this.category = ''
        }
    },

    computed: {
        EnteredCategories() {
            return this.categoryArray
        }
    }
}
</script>

<style>
    #compose-category {
        margin-left: -400px;
        text-overflow: ellipsis;
    }

    .category-input {
        width: 1020px;
        border:none; 
        border-bottom: 1px solid lightgray;
        outline: none;
        background-color: transparent;
        font-size: 20px;
        padding-left: 10px;
    }

    .category-item {
        background-color: lightgray;
        border-radius: 4px;
        padding: 5px;
        margin: 3px;
    }

    .category-close {
        color: black;
        text-decoration: none;
    }

    .category-close:visited {
        color: black;
    }

    .compose {
        position: relative;
        left: 200px;
        right: 200px;
    }

    .compose-save-btn {
        width: 80px;
        height: 42px;
        margin-left: 10px;
        border: 1px #0066ff solid;
        background-color: white;
        color: #0066ff;
        border-radius: 5px;
        font-weight: bold;
        font-size: 15px;
    }

    .compose-save-btn:hover {
        transform: scale(1.1);
    }

    .compose-save-btn:active {
        background-color: rgb(240, 240, 240)
    }

    .compose-publish-btn {
        width: 80px;
        height: 42px;
        margin-left: 10px;
        border: none;
        background-color: #0066ff;
        color: whitesmoke;
        border-radius: 5px;
        font-weight: bold;
        font-size: 15px;
    }

    .compose-publish-btn:hover {
        transform: scale(1.1);
    }

    .compose-publish-btn:active {
        background-color: #0b63e6
    }

    .compose-title {
        display: flex;
        text-align: left;
        align-items: center;
        padding-bottom: 10px;
    }

    .compose-title-input {
        width: 840px;
        height: 40px;
        font-size: 20px;
        border: 1.5px lightgray solid;
    }

    .compose-editor {
        max-width: 1030px;
    }

    .ck-content { 
        height:800px; 
    }
</style>