<template>
  <router-link :to="{ name: redirect }">
    <slot />
  </router-link>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  redirect: {
    default: "",
    type: String,
  },
});
</script>
