export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fetchNewsSuccess = (newsData) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: newsData,
  };
};

export const fetchNewsError = (error) => {
  return {
    type: FETCH_NEWS_ERROR,
    payload: error,
  };
};
