<template>
  <template v-if="meals">
    <div id="app" class="relative rounded-b-2xl">
      <div class="rounded-b-2xl">
        <img
          :src="meals[currentIndex]?.strMealThumb"
          alt="Slider Image"
          class="block rounded-b-2xl w-full max-h-[230px] sm:max-h-[350px] md:max-h-[550px] object-cover object-center"
        />
        <div class="absolute rounded-b-2xl inset-0 bg-black opacity-30"></div>
        <div
          class="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block"
        >
          <h5 class="text-lg sm:text-4xl font-extrabold">
            {{ meals[currentIndex]?.strMeal.toUpperCase() }}
          </h5>
        </div>

        <!-- BUTTON PREV AND NEXT -->
        <div class="absolute bottom-1/2 w-full flex justify-between px-4">
          <button
            @click="prevSlide"
            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-100 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          >
            <span class="inline-block h-7 w-7 sm:h-10 sm:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7 sm:h-10 sm:w-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </button>
          <button
            @click="nextSlide"
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-100 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          >
            <span class="inline-block h-7 w-7 sm:h-10 sm:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7 sm:h-10 sm:w-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </template>
</template>
<script lang="ts" setup>
import { Carousel, initTWE } from "tw-elements";
import { onMounted, ref } from "vue";
const currentIndex = ref(0);
const meals: any = ref([
  {
    idMeal: "53013",
    strMeal: "Big Mac",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
  },
  {
    idMeal: "52935",
    strMeal: "Steak Diane",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg",
  },
  {
    idMeal: "52932",
    strMeal: "Pouding chomeur",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg",
  },
  {
    idMeal: "52869",
    strMeal: "Tahini Lentils",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg",
  },
  {
    idMeal: "52792",
    strMeal: "Bread and Butter Pudding",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
  },
  {
    idMeal: "52864",
    strMeal: "Mushroom & Chestnut Rotolo",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg",
  },
  {
    idMeal: "52857",
    strMeal: "Pumpkin Pie",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg",
  },
  {
    idMeal: "53009",
    strMeal: "Lamb and Lemon Souvlaki",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/rjhf741585564676.jpg",
  },
  {
    idMeal: "52923",
    strMeal: "Canadian Butter Tarts",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
  },
  {
    idMeal: "52963",
    strMeal: "Shakshuka",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
  },
]);
onMounted(() => {
  initTWE({ Carousel });
});
function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % 10;
}
function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + 10) % 10;
}
</script>
<style></style>
