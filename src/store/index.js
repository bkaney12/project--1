import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { artsReducer } from "./reducers/artsReducers";
import favoriteReducer from "./reducers/favoriteReducer";
import authReducer from "./reducers/authReducer";

import thunk from "redux-thunk";
import { setLocalStorage } from "../utils/localStorage";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { firebaseConfig, app } from "../service/firebase-config";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  artsReducer,
  favoriteReducer,
  authReducer,

  firebaseReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(app)
    // reactReduxFirebase(firebaseConfig)
  )
);

store.subscribe(() => {
  setLocalStorage("store", store.getState().favoriteReducer);
});
