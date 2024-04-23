<template>
  <div>
    <template v-if="meals && meals.length">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 p-2 sm:p-8">
        <MealItem v-for="(meal, index) in meals" :key="index" :meal="meal" />
      </div>
    </template>
    <template v-else>
      <div class="flex justify-center">
        <p class="font-bold text-2xl">There are no meals</p>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import MealItem from "./MealItem.vue";
const { meals } = defineProps({ meals: { required: true, type: Array } });
</script>
<style></style>
