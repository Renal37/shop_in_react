import { createSelector } from 'reselect';

import { CategoryState } from './catgory.reducer';

import { Cagetory } from './category.types';
import { state } from '../cart/cart.reducer';

// const selectCategoryReducer = (state):CategoryState => state.categories;
const selectCategoryReducer = (state:state): CategoryState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) :Cagetory=>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as Cagetory)
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);