import axiosClient from "../axiosClient";

export function searchMeals({ commit }: any, keyword: any) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeal", data.meals);
  });
}
export function searchMealsByLetter({ commit }: any, letter: any) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsMyLetter", data.meals);
  });
}
export function searchMealsByIngredient({ commit }: any, ingredient: any) {
  axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setMealByIngredients", data.meals);
  });
}
