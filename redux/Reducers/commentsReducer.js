import * as ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  errMsg: null,
  comments: [],
};

export const comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        comments: action.payload,
      };

    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) };

    case ActionTypes.COMMENTS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        comments: [],
      };

    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        comments: [],
      };

    default:
      return state;
  }
};
