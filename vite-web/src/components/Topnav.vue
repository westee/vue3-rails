<template>
    <div class="top-nav">
        <div class="logo">Darkness</div>
        <ul class="menu">
            <li>文档</li>
            <li>捐款</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Topnav.vue"
    }
</script>

<style lang="scss" scoped>
    .top-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0;
        background: pink;
        .logo{
            max-width: 6em;
        }

        .menu{
            display: flex;

            li{
                padding: 0 1em;
            }
        }
    }

</style>