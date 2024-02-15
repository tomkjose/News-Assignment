import React from "react";
import { useSelector } from "react-redux";
import "./UserDetails.css";
function UserDetails() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="user">
      <img src={user.avatar} alt="avatar" className="user__image" />
      <div className="user__details">
        <div className="user__name">{user.username}</div>
        <div className="user__bio">{user.bio}</div>
      </div>
    </div>
  );
}

export default UserDetails;
