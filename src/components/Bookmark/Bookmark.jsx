import React, { useState } from "react";
import "./BookMark.css";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "../Pagination/Pagination";
import { removeFromBookMark } from "../../redux/user/UserAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faGhost } from "@fortawesome/free-solid-svg-icons";
function Bookmark() {
  const bookmark = useSelector((state) => state.user.user.bookmark);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const numberOfPostPerPage = 10;
  const totalPosts = bookmark.length;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = numberOfPostPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - numberOfPostPerPage;
  const currentPosts = bookmark.slice(indexOfFirstItem, indexOfLastItem);
  const changeCurrentPage = (pageNo) => {
    setCurrentPage(pageNo);
  };
  const handleRemoveBookmark = (url) => {
    localStorage.setItem(
      "bookmark",
      JSON.stringify(user.bookmark.filter((item) => item.url !== url))
    );
    dispatch(removeFromBookMark(url));
  };
  // console.log("bookmark", bookmark);
  return (
    <div className="bookmark">
      {bookmark.length > 0 ? (
        <div className="bookmark__container">
          {currentPosts.map((post, index) => {
            return (
              <div className="bookmark__card" key={index}>
                <div className="bookmark__title__container">
                  <div className="bookmark__title">{post.title}</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faBookmark}
                      size="xl"
                      style={{
                        cursor: "pointer",
                        color: "#1d9bf0",
                      }}
                      onClick={() => handleRemoveBookmark(post.url)}
                    />
                  </div>
                </div>
                <img
                  src={post.urlToImage}
                  alt="thumbnail"
                  className="bookmark__image"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bookmark__empty">
          <FontAwesomeIcon
            icon={faGhost}
            size="xl"
            style={{ opacity: "0.5" }}
          />
          <span className="bookmark__empty"> No bookmarks </span>
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

export default Bookmark;
