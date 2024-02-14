import { applyMiddleware, createStore } from "redux";
import { newsReducer } from "./News/NewsReducer";
import { thunk } from "redux-thunk";

export const store = createStore(newsReducer, applyMiddleware(thunk));
