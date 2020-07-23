<template>
    <div class="home">
        <div class="top-nav">top nav</div>
        <div class="content">
            <aside>边栏</aside>
            <main>内容</main>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home.vue"
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