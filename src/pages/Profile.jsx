import React, { useState } from "react";
import "../styles/profile.css";
import UserDetails from "../components/UserDetails/UserDetails";
import Posts from "../components/Posts/Posts";
import Bookmark from "../components/Bookmark/Bookmark";
import { useTheme } from "../Providers/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faBookmark } from "@fortawesome/free-solid-svg-icons";
function Profile() {
  const [activeTab, setActiveTab] = useState("posts");
  const { currentTheme } = useTheme();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile">
      <UserDetails />
      <div className="tabs">
        <button
          onClick={() => handleTabClick("posts")}
          className={
            activeTab === "posts"
              ? `active ${currentTheme ? "Dark" : "Light"}`
              : ""
          }
          style={{ color: ` ${currentTheme ? "white" : "black"}` }}
        >
          <FontAwesomeIcon
            icon={faBorderAll}
            size="md"
            style={{ color: ` ${currentTheme ? "white" : "black"}` }}
          />{" "}
          Posts
        </button>
        <button
          onClick={() => handleTabClick("bookmark")}
          className={
            activeTab === "bookmark"
              ? `active ${currentTheme ? "Dark" : "Light"}`
              : ""
          }
          style={{ color: ` ${currentTheme ? "white" : "black"}` }}
        >
          <FontAwesomeIcon
            icon={faBookmark}
            size="md"
            style={{ color: ` ${currentTheme ? "white" : "black"}` }}
          />{" "}
          Bookmark
        </button>
      </div>
      {activeTab === "posts" && <Posts />}
      {activeTab === "bookmark" && <Bookmark />}
    </div>
  );
}

export default Profile;
