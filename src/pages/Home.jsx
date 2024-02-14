import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewsError,
  fetchNewsRequest,
  fetchNewsSuccess,
} from "../redux/News/NewsAction";
import { fetchNews } from "../apis";

function Home() {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNewsDetails = async () => {
      dispatch(fetchNewsRequest());
      try {
        const newsDetails = await fetchNews();
        dispatch(fetchNewsSuccess(newsDetails));
      } catch (error) {
        dispatch(fetchNewsError(error.message));
      }
    };
    fetchNewsDetails();
  }, [dispatch]);
  console.log("news", news);
  return <div>Home</div>;
}

export default Home;
