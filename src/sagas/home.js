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
        const { data, status } = response;
        if (data && status === 200) {
            yield put(homeAction.getAllDishesSuccess(data));
        } else {
            yield put(homeAction.getAllDishesFail(data));
        }
    } catch (error) {
        yield put(homeAction.getAllDishesFail(error));
        console.log(error);
    }
}


function postApiNewDish(data) {
    const dish = data.payload.data
    return Axios.post(apiUrl.API_BACKEND + apiUrl.API_ALL_DISHES, dish);

}
export function* postNewDish(payload) {
    try {
        const response = yield call(postApiNewDish, payload);
        const { data, status } = response;
        if (data && status === 200) {
            yield put(homeAction.postNewDishSuccess(data));
            yield put(homeAction.getAllDishes())
        } else {
            yield put(homeAction.postNewDishFail(data));
        }
    } catch (error) {
        yield put(homeAction.postNewDishFail(error));
        console.log(error);
    }
}


function getApiDetailDish(data) {
    const id_dish = data.payload.data
    return Axios.get(apiUrl.API_BACKEND + apiUrl.API_ALL_DISHES + "/" + id_dish);

}
export function* getDetailDish(payload) {
    try {
        const response = yield call(getApiDetailDish, payload);
        const { data, status } = response;
        if (data && status === 200) {
            yield put(homeAction.getDetailDishSuccess(data));
        } else {
            yield put(homeAction.getDetailDishFail(data));
        }
    } catch (error) {
        yield put(homeAction.getDetailDishFail(error));
        console.log(error);
    }
}

function Apilogin(data) {
    const login = data.payload.data
    return Axios.post(apiUrl.API_BACKEND + apiUrl.API_LOGIN, login);

}
export function* login(payload) {
    try {
        const response = yield call(Apilogin, payload);
        const { data, status } = response;

        if (data && status === 200) {
            yield put(homeAction.loginSuccess(data));
            localStorage.setItem("jwtToken", data.token);
            Axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        } else {
            yield put(homeAction.loginFail(data));
        }
    } catch (error) {
        yield put(homeAction.loginFail(error));
        console.log(error);
    }
}

function Apirating(data) {
    const { rating_value, dish_id } = data.payload.data
    console.log(rating_value);

    return Axios.post(apiUrl.API_BACKEND + apiUrl.API_ALL_DISHES + "/" + dish_id + "/" + apiUrl.API_RATING, { "rating_value": rating_value });

}
export function* rating(payload) {
    try {
        const response = yield call(Apirating, payload);
        const { data, status } = response;

        if (data && status === 201) {
            yield put(homeAction.ratingSuccess(data));
        } else {
            yield put(homeAction.ratingFail(data));
        }
    } catch (error) {
        yield put(homeAction.ratingFail(error));
        console.log(error);
    }
}

export function* actionHome() {
    yield takeEvery(types.GET_ALL_DISHES, getAllDishes)
    yield takeEvery(types.POST_NEW_DISH, postNewDish)
    yield takeEvery(types.GET_DETAIL_DISH, getDetailDish)
    yield takeEvery(types.LOGIN, login)
    yield takeEvery(types.RATING, rating)
}