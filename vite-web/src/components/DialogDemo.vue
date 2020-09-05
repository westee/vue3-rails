<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle {{x}}</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="ok" :cancel="cancel">
        <template v-slot:title>
            <h3>提示1</h3>
        </template>
        <template v-slot:content>
            <div>line1</div>
            <div>line2</div>
        </template>
    </Dialog>

    <h1>示例2</h1>
    <Button @click="showDialog">toggle {{x}}</Button>
</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue'
    import {ref} from 'vue'
    import Button from "../lib/Button.vue";
    import {openDialog} from "../lib/openDialog.ts";

    export default {
        components: {
            Dialog, Button
        },
        setup() {
            const x = ref(false);
            const toggle = () => {
                x.value = !x.value
            };

            const ok = () => {
                console.log('ok');
                return false
            };

            const cancel = () => {
                console.log('cancel');
            };

            const showDialog = () => {
                openDialog({
                    title: '迷惑',
                    content: '终日而思',
                    ok() {
                        console.log('ok')
                    },
                    cancel() {
                        console.log('cancel')
                    }
                })
            }

            return {x, ok, cancel, toggle, showDialog}
        }
    }
</script>