import { FETCH_TECH_NEWS } from "../action/actionType";

const initialState = { techNews: [] };

export const techNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TECH_NEWS:
      return { ...state, techNews: action.payload };
    default:
      return state;
  }
};
