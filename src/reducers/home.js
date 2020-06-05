import * as types from "../constant/ActionType";

var initState = {
    listDishes: [],
    listPostDish: [],
    detailDish: [],
    dataLogin: [],
    token: "",
    isLoading: null,
    error: null
}

var homeReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_ALL_DISHES:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case types.GET_ALL_DISHES_SUCCESS:
            const newDish = action.payload.data;
            return {
                ...state,
                isLoading: false,
                listDishes: newDish,
                error: null,
            };
        case types.GET_ALL_DISHES_FAIL:
            return {
                ...state,
                isLoading: false,
                listDishes: [],
                error: action.payload.error
            };
        case types.POST_NEW_DISH:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case types.POST_NEW_DISH_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                isLoading: false,
                listPostDish: data,
                error: null,
            };
        case types.POST_NEW_DISH_FAIL:
            return {
                ...state,
                isLoading: false,
                listPostDish: [],
                error: action.payload.error
            };
        case types.GET_DETAIL_DISH:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case types.GET_DETAIL_DISH_SUCCESS:
            const detailDish = action.payload.data;

            return {
                ...state,
                isLoading: false,
                detailDish: [detailDish],
                error: null,
            };
        case types.GET_DETAIL_DISH_FAIL:
            return {
                ...state,
                isLoading: false,
                detailDish: [],
                error: action.payload.error
            };
        case types.LOGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case types.LOGIN_SUCCESS:
            const dataLogin = action.payload.data;
            return {
                ...state,
                isLoading: false,
                dataLogin: [dataLogin],
                token: dataLogin.token,
                error: null,
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                dataLogin: [],
                error: action.payload.error
            };
        default:
            return state;
    }
}
export default homeReducer