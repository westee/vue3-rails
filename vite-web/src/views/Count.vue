<template>
  <div>
    <h1>{{ count }}</h1>
    <h1>{{ object.n }}</h1>
    <button @click="add">count add</button>
    <router-link to="/">22</router-link>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    const count = ref(0);
    const object = reactive({ n: 1 });

    // 暴露给模板
    return {
      count,
      object,
    }
  },

  data() {
    return {
      // count: 0
    }
  },
  methods:{
    add(){
      this.count += 1
      this.object.n += 1
    }
  }
}
</script>
