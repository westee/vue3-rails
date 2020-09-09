<template>
    <div class="east-tabs">
        <div class="east-tabs-nav" ref="container">
            <div class="east-tabs-nav-item" v-for="(t, index) in titles" :key="t"
                 :class="{selected: t=== selected}" @click="selectTab(t)"
                 :ref="el => {if(el) navArr[index] = el}"
            >{{t}}
            </div>

            <div class="east-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="east-tabs-content">
            <component v-for="(item, index) in defaults" :is="item" :key="index" class="east-tabs-content-item"
                       :class="{selected: item.props.title === selected}"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from '../lib/Tab.vue';
    import {ref, onMounted, onUpdated} from 'vue';

    export default {
        props: {
            selected: {
                type: String
            }
        },
        setup(props, context) {
            const navArr = ref<HTMLDivElement[]>([]);
            const indicator = ref<HTMLDivElement>(null);
            const container = ref<HTMLDivElement>(null);

            const x = ()=>{
                const navEls = [...navArr.value];
                const selectedNav = navEls.filter(div => div.classList.contains('selected'))[0];
                const {width} = selectedNav.getBoundingClientRect();
                indicator.value.style.width = width + 'px';
                const {
                    left: left1
                } = container.value.getBoundingClientRect();
                const {
                    left: left2
                } = selectedNav.getBoundingClientRect();

                const left = left2 - left1
                indicator.value.style.left = left + 'px'
            };

            onMounted(x);
            onUpdated(x);
            const defaults = context.slots.default();
            defaults.forEach(tag => {
                {
                    if (tag.type.__hmrId !== Tab.__hmrId) {
                        throw new Error("Tabs的子组件必须为 Tab。")
                    }
                    // if (tag.type !== Tab.type) {
                    //     throw new Error("Tabs的子组件必须为 Tab。")
                    // }
                }
            });
            const titles = defaults.map(tag => {
                return tag.props.title
            });

            const selectTab = (title: string) => {
                console.log(title)
                context.emit('update:selected', title)
            };
            return {defaults, titles, selectTab, navArr, indicator, container}
        }
    }
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .east-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            position: relative;

            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;

                &:first-child {
                    margin-left: 0;
                }

                &.selected {
                    color: $blue;
                }
            }

            &-indicator {
                position: absolute;
                height: 3px;
                background: $blue;
                left: 0;
                bottom: -1px;
                width: 100px;
                transition: all 250ms;
            }
        }

        &-content {
            padding: 8px 0;
        }
    }
</style>