import {CATEGORIES_ACTION_TYPES,Category} from './category.types';
import { createAction ,Action,AnyActionWithPayload,withMatcher} from '../../utils/reducer/reducer.utils';

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = AnyActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,Category[]>

export type FetchCategoriesFailure = AnyActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

export type CategoryAction = |FetchCategoriesStart|FetchCategoriesSuccess|FetchCategoriesFailure;

export const fetchCategoriesStart = withMatcher(():FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categories:Category[]):FetchCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categories
  ));

export const fetchCategoriesFailure = withMatcher((error:Error):FetchCategoriesFailure =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));


