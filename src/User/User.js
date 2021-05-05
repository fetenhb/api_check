import React from "react";
import { Link } from "react-router-dom";
import "../User/User.css";
const User = ({ el }) => {
  return (
    <div>
      <Link to={`/User/${el.id}`}>
        <div class="profile-card-6" style={{ margin: "10px" }}>
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318"
            class="img img-responsive"
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
