import { setArts } from "../reducers/artsReducers";
import { http } from "../../service/axios-config";
import axios from "axios";

export const fetchWorks = () => async (dispatch) => {
  try {
    const { data } = await http();
    dispatch(setArts(data));
    // console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
