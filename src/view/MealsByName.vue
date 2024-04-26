<template>
  <div class="sm:container sm:px-1 px-3 mx-auto pt-5">
    <h1 class="text-4xl mb-5 font-bold text-red-600">Meals by Name</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded-md border-2 border-gray-200 w-full mb-10 py-3 pl-3"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
    <template v-if="meals === null">
      <p class="text-lg">The recipe does not exist</p>
    </template>
    <template v-if="meals !== null && meals.length > 0">
      <Meals :meals="meals" />
    </template>
    <template v-if="keyword === '' && meals !== null">
      <p class="text-lg">Please enter a food name</p>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { Ref, computed, onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";
import peticiones from "../store2/index";

const store = peticiones();

const keyword: Ref<Object> = ref<Object>("");
const meals = computed(() => {
  return store.searchedMeals;
});
const searchMeals = () => {
  if (keyword.value) {
    store.searchMeals(keyword.value);
  } else {
    store.searchedMeals = [];
  }
};
onMounted(() => {
  store.searchedMeals = [];
});
// onMounted(() => {
//   keyword.value = route.params.name;
//   if (keyword.value) {
//     searchMeals();
//   }
// });
</script>
<style></style>
