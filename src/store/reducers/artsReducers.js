import { useLocation, useNavigate } from "react-router";
import {
  ADD_WORK,
  FETCH_ARTS,
  FETCH_COMMENTS,
  FETCH_WORK_SUCCESS,
  SET_SEARCH_RESULTS,
} from "../consts";

const initialState = {
  works: [],
  work: null,
  searchResults: [],
  comments: [],
};

export const artsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTS:
      return {
        ...state,
        works: action.payload,
      };

    case FETCH_WORK_SUCCESS:
      return {
        ...state,
        work: action.payload,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};

export const setArts = (payload) => ({ type: FETCH_ARTS, payload });
export const setWorkSuccess = (payload) => ({
  type: FETCH_WORK_SUCCESS,
  payload,
});
export const setSearchResults = (data) => ({
  type: SET_SEARCH_RESULTS,
  payload: data,
});
export const setComments = (payload) => ({ type: FETCH_COMMENTS, payload });
