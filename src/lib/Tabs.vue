<template>
    <div class="east-tabs">
        <div class="east-tabs-nav" ref="container">
            <div class="east-tabs-nav-item" v-for="(t, index) in titles" :key="t"
                 :class="{selected: t=== selected}" @click="selectTab(t)"
                 :ref="el => {if(t===selected) selectedNav = el}"
            >{{t}}
            </div>

            <div class="east-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="east-tabs-content">
            <component :is="current" :key="current.props.title" class="east-tabs-content-item" />
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from '../lib/Tab.vue';
    import {ref,onMounted, computed, watchEffect} from 'vue';

    export default {
        props: {
            selected: {
                type: String
            }
        },
        setup(props, context) {
            const indicator = ref<HTMLDivElement>(null);
            const selectedNav = ref<HTMLDivElement>(null);
            const container = ref<HTMLDivElement>(null);

            const x = ()=>{
                const {width} = selectedNav.value.getBoundingClientRect();
                indicator.value.style.width = width + 'px';
                const {
                    left: left1
                } = container.value.getBoundingClientRect();
                const {
                    left: left2
                } = selectedNav.value.getBoundingClientRect();

                const left = left2 - left1;
                indicator.value.style.left = left + 'px'
            };

            onMounted(()=> {
                watchEffect(x);
            });

            const defaults = context.slots.default();
            defaults.forEach(tag => {
                {
                    if (tag.type.__hmrId !== Tab.__hmrId) {
                        throw new Error("Tabs的子组件必须为 Tab。")
                    }
                }
            });
            const titles = defaults.map(tag => {
                return tag.props.title
            });

            const current = computed(() => {
                return defaults.find(tag => tag.props.title === props.selected)
            })

            const selectTab = (title: string) => {
                context.emit('update:selected', title)
            };
            return {defaults, titles, selectTab,selectedNav, indicator, container ,current}
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