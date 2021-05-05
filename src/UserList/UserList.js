import React from "react";
import User from "../User/User";
import "../User/User.css";

const UserList = ({ listOfUSer }) => {
  return (
    <div>
      <header>
        <div class="container text-center">
          <div class="logo"></div>
        </div>
      </header>
      <div class="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {listOfUSer.map((el, i) => (
          <User el={el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
