<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog :visible="x"></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import {ref} from 'vue'
import Button from "../lib/Button.vue";
    export default {
        components:{
            Dialog,Button
        },
        setup(){
            const x = ref(false);
            const toggle = () => {
                console.log(12)
                x.value = !x.value
            };
            return {toggle}
        }
    }
</script>