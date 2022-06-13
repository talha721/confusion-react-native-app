import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { dishes } from "./Reducers/dishesReducer";
import { comments } from "./Reducers/commentsReducer";
import { promotions } from "./Reducers/promotionsReducer";
import { leaders } from "./Reducers/leadersReducer";
import { favorites } from "./Reducers/favoritesReducer";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";

export const ConfigureStore = () => {
  const config = {
    key: "root",
    storage,
    debug: true,
  };
  const store = createStore(
    persistCombineReducers(config, {
      dishes,
      comments,
      promotions,
      leaders,
      favorites,
    }),
    applyMiddleware(thunk, logger)
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
