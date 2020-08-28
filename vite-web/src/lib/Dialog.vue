<template>
    <div>Dialog</div>
    <header>标题</header>
    <main>
        <p>p1</p>
        <p>p2</p>
    </main>
    <footer>
        <Button></Button>
    </footer>
</template>

<script lang="ts">
    import Button from '../lib/Button'
    export default {
        components: {
            Button
        }
    }
</script>