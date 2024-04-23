<template>
  <div class="p-2 sm:p-8">
    <h1 class="text-4xl mb-5 font-bold text-red-600">Search Meals by Name</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="meals" />
</template>
<script lang="ts" setup>
import { Ref, computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword: Ref<Object> = ref<Object>([]);
const meals = computed(() => store.state.searchedMeals);
const searchMeals = () => {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeal", []);
  }
};
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
<style></style>
