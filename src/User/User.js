import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../User/User.css";
const User = ({ el, i, image }) => {
  console.log(i);
  return (
    <div>
      <Link to={`/User/${el.id}`}>
        <div class="profile-card-6" style={{ margin: "10px" }}>
          <img
            src={
              i < 10
                ? image[i]
                : "https://i.pinimg.com/736x/72/ef/ba/72efba8ba7185deaac209d8e0bb789a2.jpg"
            }
            class="img img-responsive"
            style={{ width: "100%" }}
          />
          <div class="profile-name">{el.name}</div>
          <div class="profile-position">{el.email}</div>
          <div class="profile-overview">
            <div class="profile-overview"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default User;
