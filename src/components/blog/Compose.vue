<template>
    <div class="compose">
        <div class="compose-title">
            <input class="compose-title-input" placeholder="请输入标题" v-model="title">
            <button class="compose-save-btn">保存草稿</button>
            <button class="compose-publish-btn">发布文章</button>
        </div>

        <div class="compose-editor">
            <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
        </div>
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
                placeholder: 'This is where dream starts...'
            }
        }
    },

    components: {
        ckeditor: CKEditor.component
    },

    methods: {

    },
}
</script>

<style>
    .compose {
        padding-left: 200px;
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
        width: 830px;
        height: 40px;
        font-size: 20px;
        border: 1.5px lightgray solid;
    }

    .compose-editor {
        max-width: 1020px;
    }

    .ck-content { 
        height:800px; 
    }
</style>