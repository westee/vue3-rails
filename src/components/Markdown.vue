<template>
    <article class="markdown-body" v-html="x"></article>
</template>

<script>
    import {ref} from 'vue'
    export default {

        props:{
          path: {
              type: String
          }
        },
        setup(props){
            const x = ref();
            console.log(props.path)
            import(props.path).then((res)=>{
                x.value = res.default
            });
            return {x}
        }
    }
</script>