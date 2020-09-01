<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle {{x}}</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="ok" :cancel="cancel" >
        <div>line1</div>
        <div>line2</div>
    </Dialog>
</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue'
    import {ref} from 'vue'
    import Button from "../lib/Button.vue";

    export default {
        components: {
            Dialog, Button
        },
        setup() {
            const x = ref(false);
            const toggle = () => {
                x.value = !x.value
            };

            const ok = ()=>{
                console.log('ok');
                return false
            };

            const cancel = ()=>{
                console.log('cancel');
            };
            return {x, ok, cancel, toggle}
        }
    }
</script>