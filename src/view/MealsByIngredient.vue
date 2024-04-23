<template>
  <Meals :meals="meals" />
</template>
<script lang="ts" setup>
import { computed, onMounted } from "vue";
// import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import peticiones from "../store2/index";

const store = peticiones();

const route = useRoute();
// const meals = computed(() => store.state.mealsByIngredient);
const meals = computed(() => store.mealsByIngredient);
onMounted(() => {
  store.searchMealsByIngredient(route.params.ingredient);
});
</script>
<style></style>
