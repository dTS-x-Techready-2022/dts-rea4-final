import { FETCH_NEWS, FETCH_HERO_NEWS, FETCH_SIDE_NEWS } from "./actionType";
import axios from "axios";

export const fetchNewsSuccess = (payload) => {
  return {
    type: FETCH_NEWS,
    payload,
  };
};

export const fetchNews = (url) => {
  return (dispatch, getState) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network response error");
        return response.json();
      })
      .then((data) => {
        dispatch(fetchNewsSuccess(data));
      });
  };
};

export const fetchHeroSuccess = (payload) => {
  return {
    type: FETCH_HERO_NEWS,
    payload,
  };
};

export const fetchHeroNews = (url) => {
  return (dispatch, getState) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network response error");
        return response.json();
      })
      .then((data) => {
        dispatch(fetchHeroSuccess(data));
      });
  };
};

export const fetchSideSuccess = (payload) => {
  return {
    type: FETCH_SIDE_NEWS,
    payload,
  };
};

export const fetchSideNews = (url) => {
  return (dispatch, getState) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network response error");
        return response.json();
      })
      .then((data) => {
        dispatch(fetchSideSuccess(data));
      });
  };
};
