<template>
  <button :class="{checked}" @click="toggleChecked">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
    setup(){
        const checked = ref(false);

        const toggleChecked = ()=>{
            checked.value = !checked.value
            console.log(checked.value)
        }

        return { checked, toggleChecked }
    }
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$my-blue: #0092ff;
$my-grey: #aaa;

button {
  height: $h;
  width: $h * 2;
  border: none;
  background: $my-grey;
  border-radius: $h/2;
  position: relative;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
  }

  &.checked {
      background: $my-blue;
      span {
    left: calc(100% - #{$h2} - 2px);
  }}
}
</style>