<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { ref, provide } from "vue";
export default {
  name: "App",
  setup() {
    const menuVisible = ref(false);
    provide("menuVisible", menuVisible);
  },
  components: {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
ol {
  list-style: none;
}
</style>
