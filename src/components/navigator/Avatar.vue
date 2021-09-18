<template>
    <div class="avatar">
        <a href="javascript:;">
            <img src="@/assets/logo.png" width="40" height="40" alt="头像">
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .avatar {
        float: right;
        margin-right: -140px;
        margin-top: 10px;
    }

    .avatar:hover {
        transform: scale(1.1)
    }
</style>