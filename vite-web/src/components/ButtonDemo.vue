<template>
    <div>Button</div>
    <div>示例1</div>
    <div>
        <Button  @click="xxx" @focus="xxx" @mouseover="xxx" size="small">按钮</Button>
        <Button theme="button" @click="xxx" @focus="xxx" @mouseover="xxx" size="small">按钮</Button>
        <Button theme="text" @click="xxx" @focus="xxx" @mouseover="xxx" size="small">按钮</Button>
        <Button theme="link" @click="xxx" @focus="xxx" @mouseover="xxx" size="small">按钮</Button>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'

    export default {
        components: {
            Button
        },
        setup() {
            const xxx = () => {
                console.log("hi")
            };
            return {xxx}
        }
    }

</script>