<template>
  <div>
    <NavBar />
    <main>
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>
<script lang="ts" setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>
<style scoped></style>
