export function setSearchedMeal(state: any, meals: any) {
  state.searchedMeals = meals || [];
}
export function setMealsMyLetter(state: any, meals: any) {
  state.mealsByLetter = meals || [];
}
export function setMealByIngredients(state: any, meals: any) {
  state.mealsByIngredient = meals || [];
}
