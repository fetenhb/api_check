import React from "react";
import { useEffect } from "react";

import User from "../User/User";
import "../User/User.css";

import "../UserList/UserList.scss";
const UserList = ({ userData, image }) => {
  return (
    <div
      class="container"
      style={{
        display: "flex",
        flexWrap: "wrap",

        marginLeft: "17%",
        marginRight: "10%",
      }}
    >
      {userData.map(
        (el, i) => (console.log(i), (<User el={el} i={i} image={image} />))
      )}

      {console.log(userData)}
    </div>
  );
};

export default UserList;
