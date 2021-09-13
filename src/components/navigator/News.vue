<template>
    <div class="news">
        <a href="javascript:;">
            <img src="@/assets/navigator/notification.png" width="25" height="25">
        </a>
        <a href="javascript:;">
            <img src="@/assets/navigator/message.png" width="25" height="25">
        </a>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
    .news {
        position: fixed;
        right: 280px;
        top: 17px;
    }

    img {
        margin-left: 15px;
    }
</style>