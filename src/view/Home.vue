<template>
  <div class="sm:container sm:px-1 px-3 mx-auto">
    <Slider />
    <div class="pt-5">
      <h1 class="text-4xl mb-5 font-bold text-red-600">Random Meals</h1>
      <Meals :meals="meals" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import axiosClient from "../axiosClient.ts";
import Meals from "../components/Meals.vue";
import Slider from "../components/Slider.vue";

const meals: Ref<Array<any>> = ref<Array<any>>([]);
onMounted(async () => {
  try {
    for (let index = 0; index < 12; index++) {
      const response = await axiosClient.get("random.php");

      meals.value.push(response.data.meals[0]);
    }
  } catch (error) {
    console.error("Error al obtener los meals:", error);
  }
});
</script>
<style lang=""></style>
