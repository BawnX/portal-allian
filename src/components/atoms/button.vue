<template>
  <button :class="wrapperClass">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  isRounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "normal",
  },
});

const staticClass =
  "inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0";

const wrapperClass = computed(() => {
  const rounded = props.isRounded ? "rounded-full" : "rounded-lg";
  const size =
    props.size === "small" ? "h-8" : props.size === "normal" ? "h-11" : "h-15";
  if (props.type === "primary") {
    return `${staticClass} ${rounded} ${size} dark:bg-secondary dark:hover:bg-primary hover:bg-secondary bg-primary text-light-color`;
  }

  if (props.type === "transparent") {
    return `${staticClass} ${rounded} ${size}`;
  }
  return "";
});
</script>
