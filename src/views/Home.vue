<template>
    <div>
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

        <div class="features">
            <ul>
                <li>
                    <svg>
                        <use xlink:href="#icon-vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-ts"></use>
                    </svg>
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写（非严格检查）</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-light"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>
            </ul>
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

    .features {
        margin: 64px auto;
        width: 400px;
        @media (min-width: 800px) {
            width: 800px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }
        >ul {
            display: flex;
            flex-wrap: wrap;
            >li {
                width: 400px;
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas:
                        "icon title"
                        "icon text";
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;
                >svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }
                >h3 {
                    grid-area: title;
                    font-size: 28px;
                }
                >p {
                    grid-area: text
                }
            }
        }
    }

</style>