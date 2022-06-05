import * as ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  errMsg: null,
  leaders: [],
};

export const leadersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        leaders: action.payload,
      };

    case ActionTypes.LEADERS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        leaders: [],
      };

    case ActionTypes.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        leaders: [],
      };

    default:
      return state;
  }
};
