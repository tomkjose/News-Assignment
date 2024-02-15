import { applyMiddleware, combineReducers, createStore } from "redux";
import { newsReducer } from "./News/NewsReducer";
import { thunk } from "redux-thunk";
import { userReducer } from "./user/UserReducer";

const combinedReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
});
export const store = createStore(combinedReducer, applyMiddleware(thunk));
