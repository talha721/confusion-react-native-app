import * as ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  errMsg: null,
  dishes: [],
};

export const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        dishes: action.payload,
      };

    case ActionTypes.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        dishes: [],
      };

    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        dishes: [],
      };

    default:
      return state;
  }
};
