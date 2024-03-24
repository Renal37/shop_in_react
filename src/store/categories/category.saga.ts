import { all, call, put, takeLatest } from "typed-redux-saga/macro";

import { fetchCategoriesFailure, fetchCategoriesSuccess } from "./category.action.js";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";

import {CATEGORIES_ACTION_TYPES} from "./category.types.js";


export function* fetchCategoriesStartAsync() {
    try {
        const categories = yield* call(getCategoriesAndDocuments);
        yield* put (fetchCategoriesSuccess(categories))
    } catch (error) {
        yield* put (fetchCategoriesFailure(error as Error));
    }
}

export function* onFetchCategories(){
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesStartAsync);
}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)])
}