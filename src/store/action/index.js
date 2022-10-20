import { FETCH_TECH_NEWS } from "./actionType";
import axios from "axios";

export const fetchTechNewsSuccess = (payload) => {
  return {
    type: FETCH_TECH_NEWS,
    payload,
  };
};

export const fetchTechNews = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get("http://localhost:3001/api/tech");
      dispatch(fetchTechNewsSuccess(data));
    } catch (err) {
      console.error(err);
    }
  };
};
