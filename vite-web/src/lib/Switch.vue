<template>
  <button :class="{checked: value}" @click="toggleChecked">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {

    const toggleChecked = () => {
        context.emit('input', !props.value)
    };

    return { toggleChecked };
  },
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
  &:focus {
    outline: none;
  }

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 0.3s;
  }

  &.checked {
    background: $my-blue;
    span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>