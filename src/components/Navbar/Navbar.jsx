import React from "react";
import { useTheme } from "../../Providers/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const { currentTheme, changeTheme } = useTheme();
  const user = useSelector((state) => state.user.user);
  return (
    <div className="navbar">
      <Link to="/">
        <div
          className="nav__brand"
          style={{ color: `${currentTheme ? "white" : "black"}` }}
        >
          News
        </div>
      </Link>
      <div className="nav__menu">
        <Link to="/settings" className="icon-link">
          <FontAwesomeIcon
            icon={faGear}
            size="xl"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <div onClick={changeTheme} className="nav__themeicon">
          {currentTheme ? (
            <FontAwesomeIcon
              icon={faSun}
              size="xl"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              size="xl"
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        <Link to="/profile">
          <img src={user.avatar} alt="avatar" className="nav__avatar" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
