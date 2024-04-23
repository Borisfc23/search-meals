<template>
  <a
    :href="props.href"
    class="bg-red-600 rounded text-white px-3 py-2 hover:bg-red-500 transition-colors"
    target="_blank"
  >
    <slot></slot>
  </a>
</template>
<script setup lang="ts">
const props = defineProps({
  href: String,
});
</script>
<style></style>
