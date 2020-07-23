<template>
    <div class="home">
        <Topnav></Topnav>
        <div class="content">
            <Aside></Aside>
            <Main></Main>
        </div>
    </div>
</template>

<script>
    import Aside from "../components/Doc/Aside.vue"
    import Main from "../components/Doc/Main.vue"
    import Topnav from "../components/Topnav.vue";
    export default {
        name: "Home.vue",
        components: {Topnav,Aside,Main}
    }
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        flex-direction: column;
        height: 100vh;

        .content {
            display: flex;
            max-width: 1000px;
            width: 100%;
            flex-grow: 1;
        }
    }

</style>