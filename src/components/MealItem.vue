<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        alt="meal.strMeal"
        class="rounded-t-xl w-full h-72 object-cover"
      />
    </router-link>
    <div class="px-3">
      <h3 class="py-3 font-bold">{{ meal.strMeal }}</h3>
      <p class="line-clamp-4">{{ meal.strInstructions }}</p>
      <div class="py-3 flex justify-between">
        <YoutubeButton :href="meal.strYoutube">Go to YouTube</YoutubeButton>
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="bg-yellow-500 rounded text-white px-3 py-2 hover:bg-yellow-400 transition-colors"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const { meal } = defineProps({ meal: { required: true, type: Object } });
</script>
<style lang=""></style>
