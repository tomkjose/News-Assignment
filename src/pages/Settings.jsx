import React from "react";
import "../styles/setting.css";
import { Link } from "react-router-dom";
function Settings() {
  return (
    <div className="setting">
      <div className="setting__title ">Settings</div>
      <Link to="/profile">
        <button className="setting__btn">Profile</button>
      </Link>
    </div>
  );
}

export default Settings;
