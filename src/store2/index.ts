import { defineStore } from "pinia";
import axiosClient from "../axiosClient";

const peticiones = defineStore("store", {
  state: () => ({
    searchedMeals: [],
    searchedMealsFast: [],
    mealsByLetter: [],
    mealsByIngredient: [],
  }),
  actions: {
    searchMeals(keyword: any) {
      axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        this.searchedMeals = data.meals;
      });
    },
    searchMealsByLetter(letter: any) {
      axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        this.mealsByLetter = data.meals;
      });
    },
    searchMealsByIngredient(ingredient: any) {
      axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
        this.mealsByIngredient = data.meals;
      });
    },
    searchMealsFast(keyword: any) {
      axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        this.searchedMealsFast = data.meals;
      });
    },
  },
});
export default peticiones;
