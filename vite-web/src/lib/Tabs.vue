<template>
    <div>
        Tabs组件
        <component :is="defaults[0]"></component>
        <component :is="defaults[1]"></component>
    </div>
</template>

<script lang="ts">
    import Tab from '../lib/Tab.vue';

    export default {
        setup(props, context){
            const defaults = context.slots.default()
            defaults.forEach(tag => {{
                if(tag.type !== Tab){
                    throw new Error("Tabs的子组件必须为 Tab。")
                }
            }})
            return {defaults}
        }
    }
</script>