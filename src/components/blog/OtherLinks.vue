<template>
    <div class="other-links">
         <div class="title">
            <h4>其他链接</h4>
        </div>
        <hr>
        <div class="links-area">
            <div>
                <a href="https://www.zhihu.com/people/la-vie-est-belle" target="_blank"><img src="@/assets/blog/zhihu.png" width="38" height="38"></a>
                <p>知乎</p>
            </div>

            <div>
                <a href="https://github.com/la-vie-est-belle" target="_blank"><img src="@/assets/blog/github.png" width="38" height="38"></a>
                <p>GitHub</p>
            </div>

            <div>
                <a href="https://blog.csdn.net/La_vie_est_belle" target="_blank"><img src="@/assets/blog/csdn.png" width="38" height="38"></a>
                <p>CSDN</p>
            </div>

            <div>
                <a href="http://mp.weixin.qq.com/profile?src=3&timestamp=1631667748&ver=1&signature=2SnpJoDDZkStO5yDVZ7*T5L3JsYWlYAcakidumoMlGIBRhn140BmQo00fuXjx5v8rZe8Lc67r3oItrgnfgct4Q==" target="_blank"><img src="@/assets/blog/wechat.png" width="38" height="38"></a>
                <p>公众号</p>
            </div>
        </div>
    </div>
   
</template>

<script>
export default {
}
</script>

<style scoped>
    .other-links {
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

    .links-area {
        display: flex;
        justify-content:space-around
    }
</style>