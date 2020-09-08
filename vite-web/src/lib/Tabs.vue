<template>
    <div class="east-tabs">
        <div class="east-tabs-nav">
            <div class="east-tabs-nav-item" v-for="t in titles" :key="t"
                 :class="{selected: t=== selected}"
            >{{t}}</div>
        </div>
        <div class="east-tabs-content">
            <component v-for="(item, index) in defaults" :is="item" :key="index" class="east-tabs-content-item" />
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from '../lib/Tab.vue';

    export default {
        props:{
          selected: {
              type: String
          }
        },
        setup(props, context) {
            const defaults = context.slots.default()
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
            return {defaults, titles}
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