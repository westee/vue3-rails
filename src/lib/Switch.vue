<template>
  <button class="east-switch" :class="{'east-checked': value}" @click="toggleChecked">
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

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$my-blue: #0092ff;
$my-grey: #aaa;

.east-switch {
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
    transition: left 0.3s;
  }

  &.east-checked {
    background: $my-blue;
    span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus { outline: none; }

  &:active {
    > span { width: $h2 + 4px; }
  }

  &.east-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
</style>