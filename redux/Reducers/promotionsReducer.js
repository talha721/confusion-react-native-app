import * as ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  errMsg: null,
  promotions: [],
};

export const promotions = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOTIONS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        promotions: action.payload,
      };

    case ActionTypes.PROMOTIONS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        promotions: [],
      };

    case ActionTypes.PROMOTIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        promotions: [],
      };

    default:
      return state;
  }
};
