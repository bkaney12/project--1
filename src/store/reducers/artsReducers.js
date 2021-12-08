import { FETCH_ARTS } from "../consts";

const initialState = {
  works: [],
};

export const artsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTS:
      return {
        ...state,
        works: action.payload,
      };

    default:
      return state;
  }
};

export const setArts = (payload) => ({ type: FETCH_ARTS, payload });
