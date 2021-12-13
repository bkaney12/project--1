import {
  setArts,
  setWorkSuccess,
  setSearchResults,
  setComments,
} from "../reducers/artsReducers";
import { http, http_com } from "../../service/axios-config";

export const fetchWorks = () => async (dispatch) => {
  try {
    const { data } = await http();
    dispatch(setArts(data));
    // console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
export const fetchOneWork = (id) => async (dispatch) => {
  try {
    const { data } = await http(`${id}`);
    dispatch(setWorkSuccess(data));
  } catch (err) {
    console.log(err.message);
  }
};
export const fetchSearchWorks = (value) => async (dispatch) => {
  try {
    if (!value) {
      dispatch(setSearchResults([]));
      return;
    }
    const { data } = await http(`?q=${value}`);

    dispatch(setSearchResults(data));
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchComments = () => async (dispatch) => {
  try {
    const { data } = await http_com();
    dispatch(setComments(data));
    // console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
