import * as types from "../constant/ActionType";

var initState = {
    listDishes: [],
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
            const { data } = action.payload;
            return {
                ...state,
                isLoading: false,
                listDishes: data.data,
                error: null,
            };
        case types.GET_ALL_DISHES_FAIL:
            return {
                ...state,
                isLoading: false,
                listDishes: [],
                error: action.payload.error
            };
        default:
            return state;
    }
}
export default homeReducer