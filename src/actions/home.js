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

export const postNewDish = (data) => {
    return {
        type: types.POST_NEW_DISH,
        payload: {
            data
        }
    };
};

export const postNewDishSuccess = data => {
    return {
        type: types.POST_NEW_DISH_SUCCESS,
        payload: {
            data
        }
    };
};

export const postNewDishFail = error => {
    return {
        type: types.POST_NEW_DISH_FAIL,
        payload: {
            error
        }
    };
};

export const getDetailDish = (data) => {
    return {
        type: types.GET_DETAIL_DISH,
        payload: {
            data
        }
    };
};

export const getDetailDishSuccess = data => {
    return {
        type: types.GET_DETAIL_DISH_SUCCESS,
        payload: {
            data
        }
    };
};

export const getDetailDishFail = error => {
    return {
        type: types.GET_DETAIL_DISH_FAIL,
        payload: {
            error
        }
    };
};


export const login = (data) => {
    return {
        type: types.LOGIN,
        payload: {
            data
        }
    };
};

export const loginSuccess = data => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: {
            data
        }
    };
};

export const loginFail = error => {
    return {
        type: types.LOGIN_FAIL,
        payload: {
            error
        }
    };
};