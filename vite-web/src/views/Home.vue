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
    $green: #02bcb0;
    $border-radius: 4px;
    $color: #28d1c9;

    .top-nav-banner {
        color: $color;
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
    }

    .banner {
        color: $color;
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > .actions {
            padding: 8px 0;

            a {
                color: #fff;
                margin: 0 8px;
                background: $green;
                display: inline-block;
                border-radius: $border-radius;
                padding: 4px 8px;

                &:hover{
                    text-decoration: none;
                }
            }
        }
    }

</style>