import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { dishesReducer } from "./Reducers/dishesReducer";
import { commentsReducer } from "./Reducers/commentsReducer";
import { promotionsReducer } from "./Reducers/promotionsReducer";
import { leadersReducer } from "./Reducers/leadersReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: dishesReducer,
      comments: commentsReducer,
      promotions: promotionsReducer,
      leaders: leadersReducer,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
