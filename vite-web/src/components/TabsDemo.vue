<template>
    <div>
        <Tabs selected="导航1">
            <Tab title="导航1">内容一</Tab>
            <Tab title="导航2">内容二</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
    import Tab from '../lib/Tab.vue'
    import Tabs from '../lib/Tabs.vue'

    export default {
        components:{
            Tab, Tabs
        }
    }
</script>