import * as types from "../constant/ActionType";

export const getAllDishes = () => {
    return {
        type: types.GET_ALL_DISHES
    };
};

export const getAllDishesSuccess = data => {
    return {
        type: types.GET_ALL_DISHES_SUCCESS,
        payload: {
            data
        }
    };
};

export const getAllDishesFail = error => {
    return {
        type: types.GET_ALL_DISHES_FAIL,
        payload: {
            error
        }
    };
};