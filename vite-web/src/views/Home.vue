<template>
    <div class="top-nav-banner">
        <Topnav></Topnav>
        <div class="banner">
            <h1>Darkness UI</h1>
            <h2>基于Vue3 和 TypeScript 的 UI 框架</h2>
            <div class="actions">
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
    .top-nav-banner {
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
    }

    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > .actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: #fff;
                display: inline-block;
                $h: 28px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 8px;
            }
        }
    }

</style>