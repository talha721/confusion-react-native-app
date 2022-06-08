import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { dishes } from "./Reducers/dishesReducer";
import { comments } from "./Reducers/commentsReducer";
import { promotions } from "./Reducers/promotionsReducer";
import { leaders } from "./Reducers/leadersReducer";
import { favorites } from "./Reducers/favoritesReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes,
      comments,
      promotions,
      leaders,
      favorites,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
