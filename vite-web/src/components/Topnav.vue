<template>
    <div class="top-nav">
        <div class="logo" @click="toggleMenu">Darkness</div>
        <ul class="menu">
            <li>文档</li>
            <li>捐款</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { inject , Ref} from 'vue'
    export default {
        name: "Topnav.vue",
        setup(){
            const asideVisible = inject<Ref<boolean>>('menuVisible');
            const toggleMenu = () => {
                asideVisible.value = !asideVisible.value
                console.log(asideVisible.value)
            }

            return {toggleMenu}
        }
    }
</script>

<style lang="scss" scoped>
    .top-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0;
        background: pink;
        position: relative;
        z-index: 10;

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