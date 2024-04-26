<template>
  <div class="sm:container sm:px-1 px-3 mx-auto pt-5 mb-5">
    <h1 class="text-4xl mb-5 font-bold text-red-600">List of Meals</h1>
    <Meals :meals="meals" />
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import peticiones from "../store2/index";

const store = peticiones();

const route = useRoute();
const meals = computed(() => store.mealsByIngredient);
onMounted(() => {
  store.searchMealsByIngredient(route.params.ingredient);
});
</script>
<style></style>
