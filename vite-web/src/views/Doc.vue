<template>
    <div class="home">
        <Topnav></Topnav>
        <div class="content">
            <aside>边栏</aside>
            <main>内容</main>
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

        .top-nav {
            background: pink;
        }

        .content {
            display: flex;
            flex-grow: 1;
            aside {
                width: 200px;
                background: lightblue;
            }

            main {
                flex-grow: 1;
                background: lightgreen;
            }
        }
    }

</style>