import {all,call} from 'typed-redux-saga/macro';
import { categoriesSaga } from './categories/category.saga.js';
import { userSagas } from './user/user.saga.js';

export function* rootSaga(){
    yield* all([call(categoriesSaga),call(userSagas)]);
}