import {
  FETCH_NEWS_ERROR,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "./NewsAction";

const initialValue = {
  news: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        news: action.payload,
      };
    case FETCH_NEWS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
