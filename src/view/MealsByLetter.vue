<template>
  <div class="p-2 sm:p-8">
    <h1 class="text-4xl mb-5 font-bold text-red-600">Meals by Letter</h1>
    <div
      class="flex justify-center flex-wrap gap-2 my-10 sm:w-3/4 md:w-full mx-auto"
    >
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="(letter, index) in letters"
        :key="index"
        class="flex justify-center items-center w-7 h-7 hover:bg-red-500 hover:text-white rounded-2xl"
        active-class="active"
        >{{ letter }}</router-link
      >
    </div>
    <Meals :meals="meals" />
  </div>
</template>
<script lang="ts" setup>
import { Ref, computed, onMounted, ref, watch } from "vue";
// import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import peticiones from "../store2/index";

const store = peticiones();

const route = useRoute();
const letters: Ref<any> = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
letters.value = letters.value.split("");
// const meals = computed(() => store.state.mealsByLetter);
const meals = computed(() => store.mealsByLetter);
onMounted(() => {
  // store.dispatch("searchMealsByLetter", route.params.letter);
  store.searchMealsByLetter(route.params.letter);
});

watch(route, () => {
  // store.dispatch("searchMealsByLetter", route.params.letter);
  store.searchMealsByLetter(route.params.letter);
});
</script>
<style scopped>
.active {
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
  color: white;
}
</style>
