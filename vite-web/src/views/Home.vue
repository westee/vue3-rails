<template>
    <div class="home">
        <Topnav></Topnav>
        <div class="intro">
            <h1>Darkness UI</h1>
            <h2>基于Vue3 和 TypeScript 的 UI 框架</h2>
            <div class="links">
                <router-link to="/doc">查看文档</router-link>
                <a href="github.com">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
    import Topnav from "../components/Topnav.vue";

    export default {
        name: "Home.vue",
        components: {Topnav}
    }
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        flex-direction: column;
        height: 100vh;

        .intro {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-direction: column;
            padding: 100px 0;
        }

    }

</style>