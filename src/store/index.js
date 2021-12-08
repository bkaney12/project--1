import { applyMiddleware, combineReducers, createStore } from "redux";
import { artsReducer } from "./reducers/artsReducers";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  artsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
