<template>
  <div>
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script lang="ts" setup>
import NavBar from "../components/NavBar.vue";
</script>
<style scoped></style>
