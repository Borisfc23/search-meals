<template>
  <div class="p-2 sm:p-8">
    <h1 class="text-4xl mb-5 font-bold text-red-600">Meals by Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full mb-5"
      placeholder="Search for Ingredients"
      @change="searchMeals"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="(ingredient, index) in computedIngredient"
      :key="index"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { Ref, computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";

const ingredients = ref([]);
const keyword: Ref<string> = ref<string>("");
const computedIngredient = computed(() => {
  if (!computedIngredient) return ingredients;
  return ingredients.value.filter(
    (item) =>
      (item.strDescription || "")
        .toLowerCase()
        .includes(keyword.value.toLowerCase()) ||
      item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
onMounted(() => {
  axiosClient.get(`list.php?i=list`).then((data) => {
    ingredients.value = data.data.meals;
  });
});
const searchMeals = () => {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeal", []);
  }
};
</script>
<style></style>
