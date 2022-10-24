import {
  FETCH_NEWS,
  FETCH_HERO_NEWS,
  FETCH_SIDE_NEWS,
} from "../action/actionType";

const initialState = { news: [], heroNews: [], sideNews: [] };

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: action.payload };
    case FETCH_HERO_NEWS:
      return { ...state, heroNews: action.payload };
    case FETCH_SIDE_NEWS:
      return { ...state, sideNews: action.payload };
    default:
      return state;
  }
};
