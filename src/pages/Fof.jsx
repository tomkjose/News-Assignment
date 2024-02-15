import React from "react";
import { Link } from "react-router-dom";

function Fof() {
  return (
    <div className="setting">
      <div className="setting__title ">404</div>
      <Link to="/profile">
        <button className="setting__btn">Profile</button>
      </Link>
    </div>
  );
}

export default Fof;
