import axios from "axios";
import { API_URL } from "../utils/constant";

export const fetchNews = async () => {
  const response = await axios.get(API_URL);
  //   console.log("response", response.data.articles);
  return response.data.articles;
};
