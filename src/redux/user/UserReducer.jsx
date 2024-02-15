import { ADD_TO_BOOKMARK, REMOVE_FROM_BOOKMARK } from "./UserAction";

const initialValue = {
  user: {
    username: "Jacob",
    avatar: "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    bio: "Tech enthusiast and avid problem-solver, passionate about exploring the latest innovations and sharing insights to inspire others in the ever-evolving world of technology.",
    bookmark: JSON.parse(localStorage.getItem("bookmark")) || [],
  },
};

export const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      return {
        ...state,
        user: {
          ...state.user,
          bookmark: [...state.user.bookmark, action.payload],
        },
      };
    case REMOVE_FROM_BOOKMARK:
      const newBookMarkList = state.user.bookmark.filter(
        (post) => post.url !== action.payload
      );
      return {
        ...state,
        user: {
          ...state.user,
          bookmark: newBookMarkList,
        },
      };
    default:
      return state;
  }
};
