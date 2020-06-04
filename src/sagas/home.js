import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "../constant/ActionType";
import * as apiUrl from "../constant/apiUrl";
import Axios from "axios";
import * as homeAction from "../actions/home"

function getApiAllDishes() {
    return Axios.get(apiUrl.API_BACKEND + apiUrl.API_ALL_DISHES);

}
export function* getAllDishes() {
    try {
        const response = yield call(getApiAllDishes);
        const { data } = response;
        if (data && data.status === true) {
            yield put(homeAction.getAllDishesSuccess(data));
        } else {
            yield put(homeAction.getAllDishesFail(data));
        }
    } catch (error) {
        yield put(homeAction.getAllDishesFail(error));
        console.log(error);
    }
}

export function* actionHome() {
    yield takeEvery(types.GET_ALL_DISHES, getAllDishes)
}