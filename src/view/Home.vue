<template>
  <div>
    <Slider />
    <div class="p-2 sm:p-8">
      <h1 class="text-4xl mb-5 font-bold text-red-600">Random Meals</h1>
      <Meals :meals="meals" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.ts";
import Meals from "../components/Meals.vue";
import Slider from "../components/Slider.vue";

const meals: Array<string> = ref<Array<string>>([]);
const mealsSlide: Array<string> = ref<Array<string>>([]);
onMounted(async () => {
  try {
    for (let index = 0; index < 9; index++) {
      const response = await axiosClient.get("random.php");
      meals.value.push(response.data.meals[0]);
    }
    for (let index = 0; index < 3; index++) {
      const response2 = await axiosClient.get("random.php");
      mealsSlide.value.push(response2.data.meals[0]);
    }
  } catch (error) {
    console.error("Error al obtener los meals:", error);
  }
});
</script>
<style lang=""></style>

<!-- https://www.youtube.com/watch?v=cfiN8lCA3RM&ab_channel=TheCodeholic-->
