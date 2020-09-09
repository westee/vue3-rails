<template>
    <div>
        <Tabs v-model:selected="selectedTabName">
            <Tab title="导航1">内容一</Tab>
            <Tab title="导航2">内容二</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
    import Tab from '../lib/Tab.vue'
    import Tabs from '../lib/Tabs.vue'
    import {ref} from 'vue'
    export default {
        components:{
            Tab, Tabs
        },
        setup(){
            const selectedTabName = ref('导航1');
            return {
                selectedTabName
            }
        }
    }
</script>