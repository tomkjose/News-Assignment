export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const REMOVE_FROM_BOOKMARK = "REMOVE_FROM_BOOKMARK";

export const addToBookMark = (post) => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: post,
  };
};

export const removeFromBookMark = (url) => {
  return {
    type: REMOVE_FROM_BOOKMARK,
    payload: url,
  };
};
