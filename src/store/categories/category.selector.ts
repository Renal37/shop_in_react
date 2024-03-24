import { createSelector } from 'reselect';

import { CategoriesState } from './catgory.reducer';
import { Cagetory } from './category.types';
import { RootState } from '../store';

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): Cagetory =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as Cagetory)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);