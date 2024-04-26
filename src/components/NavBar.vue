<template>
  <!-- Main navigation container -->
  <nav
    class="flex-no-wrap relative flex w-full items-center justify-between bg-red-700 py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4"
  >
    <div
      class="flex w-full sm:container sm:px-1 px-3 mx-auto flex-wrap items-center justify-between"
    >
      <!-- Hamburger button for mobile view -->
      <button
        class="block border-0 bg-transparent text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        data-twe-collapse-init
        data-twe-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- Hamburger icon -->
        <span
          class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <!-- Collapsible navigation container -->
      <div
        class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent1"
        data-twe-collapse-item
      >
        <!-- Logo -->
        <router-link
          :to="{ name: 'home' }"
          class="mb-4 me-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
          href="#"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-yellow-400 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </span>
          <h1 class="text-2xl font-bold text-gray-50">RecipesHealth</h1>
        </router-link>
        <!-- Left navigation links -->
        <ul
          class="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
          data-twe-navbar-nav-ref
        >
          <li class="lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <!-- Dashboard link -->
            <router-link
              :to="{ name: 'byName' }"
              class="flex items-center space-x-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              data-twe-nav-link-ref
            >
              <span>Meals</span>
            </router-link>
          </li>
          <!-- Team link -->
          <li class="lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <router-link
              :to="{ name: 'byLetter' }"
              class="space-x-2 transition duration-200hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              data-twe-nav-link-ref
            >
              <span>Letters</span>
            </router-link>
          </li>
          <!-- Projects link -->
          <li class="lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <router-link
              :to="{ name: 'ingredients' }"
              class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              data-twe-nav-link-ref
            >
              Ingredients</router-link
            >
          </li>
        </ul>
        <!-- Left links -->
      </div>

      <!-- Right elements -->
      <div class="relative flex flex-col items-center">
        <div
          class="lg:flex flex-co hidden items-center space-x-2 bg-white py-1 px-2 rounded-full"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            class="outline-none"
            type="text"
            placeholder="Search - press enter"
            v-model="filtro"
            @change="searchMealsNavBar"
          />
        </div>

        <div
          v-if="mealsSearch !== null && mealsSearch.length > 0"
          :class="view == true ? 'show' : 'hide'"
          class="contenedor-filtro"
        >
          <div v-for="(item, index) in mealsSearch" :key="index">
            <div class="contenedor-search" @click="viewDetails(item.idMeal)">
              <div class="content-img">
                <img :src="item.strMealThumb" />
              </div>
              <div class="content-text">
                <p>{{ item.strMeal }}</p>
              </div>
            </div>
          </div>
        </div>
        <template v-if="mealsSearch === null">
          <div class="contenedor-notMeals">
            <p class="text-base">The food does not exist</p>
          </div>
        </template>
      </div>
      <!-- Right elements -->
    </div>
  </nav>
</template>
<script setup lang="ts">
import { Collapse, Dropdown, initTWE } from "tw-elements";
import { Ref, computed, onMounted, ref } from "vue";
import peticiones from "../store2/index";
import router from "../router";

const view = ref(false);
const filtro: Ref<Object> = ref<Object>("");
const store = peticiones();
const mealsSearch: any = computed(() => {
  if (filtro.value) {
    if (store.searchedMealsFast.length > 0) {
      view.value = true;
    }
  }
  return store.searchedMealsFast;
});

const searchMealsNavBar = () => {
  if (filtro.value) {
    store.searchMealsFast(filtro.value);
  } else {
    store.searchedMealsFast = [];
  }
};
const viewDetails = (id: any) => {
  view.value = false;
  router.push({ name: "mealDetails", params: { id: id } });
  filtro.value = "";
};
onMounted(() => {
  initTWE({ Collapse, Dropdown });
});
</script>
<style scoped>
.show {
  height: 120px;
  transition: 0.5s all ease-in-out;
}
.hide {
  height: 0;
}
.contenedor-filtro {
  position: absolute;
  border-radius: 4px;
  left: 0;
  top: 40px;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  background-color: white;
  z-index: 99999;
}
.contenedor-notMeals {
  position: absolute;
  border-radius: 4px;
  left: 0;
  top: 40px;
  bottom: 0;
  height: 60px;
  width: 100%;
  border: 1px solid gray;
  background-color: white;
  z-index: 99999;
  transition: 0.5s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contenedor-search {
  display: flex;
  align-items: center;

  padding: 8px 12px;
  cursor: pointer;
}
.contenedor-search:hover {
  background-color: rgba(0, 0, 0, 0.045);
}
.contenedor-search .content-img {
  margin-right: 1rem;
}
.contenedor-search .content-img img {
  height: 46px;
  width: 60px;
}
.contenedor-search .content-text p {
  font-size: 12px;
  font-weight: bold;
}
</style>
