import { omit } from "lodash";
import { getLocalStorage } from "../../utils/localStorage";

import { ADD_ITEM_TO_FAVORITE, REMOVE_ITEM_FROM_FAVORITE } from "../consts";

const initialState = getLocalStorage("store");

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_ITEM_FROM_FAVORITE: {
      return omit(state, [action.payload]);
    }
    default:
      return state;
  }
};

export const setItemToFavorite = (item) => ({
  type: ADD_ITEM_TO_FAVORITE,
  payload: item,
});

export const removeItemFromFavorites = (itemId) => ({
  type: REMOVE_ITEM_FROM_FAVORITE,
  payload: itemId,
});

export default favoriteReducer;
