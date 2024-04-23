<template>
  <div class="md:w-[800px] mx-auto p-2 sm:p-8">
    <h1 class="text-5xl font-bold mb-5 font-bold text-red-600">
      {{ meal.strMeal }}
    </h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="object-cover w-full"
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 py-3">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-5">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(item, index) of new Array(20)" :key="index">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold">Measures</h2>
        <ul>
          <template v-for="(item, index) of new Array(20)" :key="index">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-10">
      <YoutubeButton :href="meal.strYoutube">Go to YouTube</YoutubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="bg-orange-400 ml-3 rounded text-white px-3 py-2 hover:bg-orange-500 transition-colors"
      >
        View Original Source</a
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Ref, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";
const route = useRoute();
const meal: Ref<any> = ref({});
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
<style></style>
