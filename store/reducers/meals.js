import { MEALS } from "../../data/dummy-data";
import { TOOGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.key === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFav = [...state.favoriteMeals];
        updatedFav.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFav };
      } else {
        const meal = state.meals.find((meal) => meal.key === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenfree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactosefree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegeterian && !meal.isVegeterian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
