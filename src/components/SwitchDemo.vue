<template>
    <div>
        <h1>Switch 组件示例 </h1>
        <div class="demo">
            <h2>常规用法</h2>
            <div class="demo-component">
                <component :is="Switch1Demo" />
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>{{SwitchDemo1.__sourceCode}}</pre>
            </div>
        </div>

        <div class="demo">
            <h2>支持disabled</h2>
            <div class="demo-component">
                <component :is="Switch1Demo" />
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>{{SwitchDemo1.__sourceCode}}</pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import SwitchDemo1 from './Switch1.demo.vue'
import SwitchDemo2 from './Switch2.demo.vue'
import { ref } from 'vue'
export default {
    components: { Button},
    setup(){
        const y = ref(true);
        // console.log(SwitchDemo1.__sourceCode);
        return {y, SwitchDemo1, SwitchDemo2}
    }
}
</script>