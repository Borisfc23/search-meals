<template>
  <template v-if="meals">
    <div
      id="carouselExampleCaptions"
      class="relative rounded-b-2xl"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <!--Carousel indicators-->
      <div
        class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="0"
          data-twe-carousel-active
          class="mx-[3px] box-content h-[5px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="1"
          class="mx-[3px] box-content h-[5px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="2"
          class="mx-[3px] box-content h-[5px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>

      <!--Carousel items-->
      <div
        class="relative rounded-b-2xl w-full overflow-hidden after:clear-both after:block after:content-['']"
      >
        <!--First item-->
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style="backface-visibility: hidden"
        >
          <img
            :src="meals?.[0]?.strMealThumb"
            class="block w-full max-h-[230px] sm:max-h-[350px] md:max-h-[550px] object-cover object-center"
            alt="..."
          />
          <div class="absolute inset-0 bg-black opacity-30"></div>
          <div
            class="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block"
          >
            <h5 class="text-lg sm:text-4xl font-extrabold sm:mb-3">
              {{ meals?.[0]?.strMeal.toUpperCase() }}
            </h5>
          </div>
        </div>
        <!--Second item-->
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style="backface-visibility: hidden"
        >
          <img
            :src="meals?.[1]?.strMealThumb"
            class="block w-full max-h-[230px] sm:max-h-[350px] md:max-h-[550px] object-cover object-center"
            alt="..."
          />
          <div class="absolute inset-0 bg-black opacity-30"></div>
          <div
            class="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block"
          >
            <h5 class="text-lg sm:text-4xl font-extrabold sm:mb-3">
              {{ meals?.[1]?.strMeal.toUpperCase() }}
            </h5>
          </div>
        </div>
        <!--Third item-->
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style="backface-visibility: hidden"
        >
          <img
            :src="meals?.[2]?.strMealThumb"
            class="block w-full max-h-[230px] sm:max-h-[350px] md:max-h-[550px] object-cover object-center"
            alt="..."
          />
          <div class="absolute inset-0 bg-black opacity-30"></div>
          <div
            class="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block"
          >
            <h5 class="text-lg sm:text-4xl font-extrabold sm:mb-3">
              {{ meals?.[2]?.strMeal.toUpperCase() }}
            </h5>
          </div>
        </div>
      </div>

      <!--Carousel controls - prev item-->
      <button
        class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-100 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="prev"
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
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Previous</span
        >
      </button>
      <!--Carousel controls - next item-->
      <button
        class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-100 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="next"
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
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next</span
        >
      </button>
    </div>
  </template>
</template>
<script lang="ts" setup>
import { Carousel, initTWE } from "tw-elements";
import { Ref, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
const meals: Ref<Array<any>> = ref<Array<any>>([]);
onMounted(async () => {
  initTWE({ Carousel });
  for (let index = 0; index < 3; index++) {
    const response2 = await axiosClient.get("random.php");
    meals.value.push(response2.data.meals[0]);
  }
});
</script>
<style></style>
