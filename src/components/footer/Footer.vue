<template>
    <footer>
        <hr>
        <div>
            <div class="intro">
                <p><small>still dream in {{ year }} © respectヾ(≧∇≦*)ゝ</small></p>
            </div>
            <div class="links">
                <a href="https://www.zhihu.com/people/la-vie-est-belle" target="_blank">知乎</a>
                <a href="https://github.com/la-vie-est-belle" target="_blank">GitHub</a>
                <a href="https://blog.csdn.net/La_vie_est_belle" target="_blank">CSDN</a>
                <a href="http://mp.weixin.qq.com/profile?src=3&timestamp=1631667748&ver=1&signature=2SnpJoDDZkStO5yDVZ7*T5L3JsYWlYAcakidumoMlGIBRhn140BmQo00fuXjx5v8rZe8Lc67r3oItrgnfgct4Q==" target="_blank">公众号</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
    footer {
        text-align: center;
        position: relative;
        bottom: 0px;
    }

    .intro {
        margin-top: -12px;
    }

    .links {
        margin-top: -15px;
    }

    a {
        text-decoration: none;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 12px;
    }

    hr {
        border: 0px;
        background-color:black;
        height: 0.5px;
        opacity: 0.2;
    }


</style>