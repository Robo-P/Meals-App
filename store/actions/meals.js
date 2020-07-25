export const TOOGLE_FAVORITE = "TOOGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = id => {
  return { type: TOOGLE_FAVORITE, mealId: id };
};

export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings };
};
