<template>
    <div>
        <h1>Switch 组件示例 </h1>
        <Demo :component="SwitchDemo1"></Demo>
        <Demo :component="SwitchDemo2"></Demo>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    import Demo from './Demo.vue';
    import SwitchDemo1 from './Switch1.demo.vue';
    import SwitchDemo2 from './Switch2.demo.vue';

    export default {
        components: {Button, Demo},
        setup() {
            return {SwitchDemo1, SwitchDemo2}
        }
    }
</script>