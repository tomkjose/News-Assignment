import React, { useEffect, useState } from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewsError,
  fetchNewsRequest,
  fetchNewsSuccess,
} from "../../redux/News/NewsAction";
import { fetchNews } from "../../apis";
import Pagination from "../Pagination/Pagination";
import { addToBookMark, removeFromBookMark } from "../../redux/user/UserAction";
import Loading from "../Loading/Loading";

function Posts() {
  const news = useSelector((state) => state.news.news);
  const loading = useSelector((state) => state.news.loading);
  const user = useSelector((state) => state.user.user);
  const numberOfPostPerPage = 10;
  const totalPosts = news.length;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = numberOfPostPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - numberOfPostPerPage;
  const currentPosts = news.slice(indexOfFirstItem, indexOfLastItem);
  const changeCurrentPage = (pageNo) => {
    setCurrentPage(pageNo);
  };
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

  const handleToggleBookmark = (post) => {
    const bookmarkedIndex = user.bookmark.findIndex(
      (bookmark) => bookmark.url === post.url
    );
    if (bookmarkedIndex !== -1) {
      localStorage.setItem(
        "bookmark",
        JSON.stringify(user.bookmark.filter((item) => item.url !== post.url))
      );
      dispatch(removeFromBookMark(post.url));
    } else {
      localStorage.setItem(
        "bookmark",
        JSON.stringify([...user.bookmark, post])
      );
      dispatch(addToBookMark(post));
    }
  };
  return (
    <div className="posts">
      {!loading ? (
        <div className="posts__container">
          {currentPosts.map((post, index) => {
            const bookmarkedIndex = user.bookmark.findIndex(
              (bookmark) => bookmark.url === post.url
            );
            return (
              <div className="post__card" key={index}>
                <div className="post__title__container">
                  <div className="post__title">{post.title}</div>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size="xl"
                    style={{
                      cursor: "pointer",
                      color: bookmarkedIndex !== -1 ? "#1d9bf0" : "inherit",
                    }}
                    onClick={() => handleToggleBookmark(post)}
                  />
                </div>
                <img
                  src={post.urlToImage}
                  alt="post thumbnail"
                  className="post__image"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="loader__container">
          <Loading />
        </div>
      )}
      <Pagination
        numberOfPostPerPage={numberOfPostPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
    </div>
  );
}

export default Posts;
