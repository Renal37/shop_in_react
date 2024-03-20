import { take, all, call, put, takeLatest } from "redux-saga/effects";

import { fetchCategoriesFailure, fetchCategoriesSuccess } from "./category.action.ts";

import { getCategotiesAndDocument } from "../../utils/firebase/firebase.utils";

import CATEGORIES_ACTION_TYPES from "./category.types";


export function* fetchCategoriesStartAsync() {
    try {
        const categories = yield call(getCategotiesAndDocument, 'categories');
        yield put (fetchCategoriesSuccess(categories))
    } catch (error) {
        yield put (fetchCategoriesFailure(error));
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesStartAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}