import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Actions";

import "./AddUser.css";
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  let dd = Math.random();
  const addNewUser = (e) => {
    e.preventDefault();
    props.add({
      name: name,
      email: email,
      phone: "02155877",
      company: {
        catchPhrase: " company",
      },
      website: "ggg@gggg",
      address: {
        city: "new york",
        street: "15",
      },
    });
    setName("");
    setEmail("");
  };

  return (
    <div style={{ marginTop: "250px", marginLeft: "650px" }}>
      <a href="#modal-opened" class="link-1" id="modal-closed">
        Add User
      </a>

      <div class="modal-container" id="modal-opened">
        <div class="modall">
          <div class="modal__details">
            <h1 class="modal__title">Add new user</h1>
            <form>
              <p className="item">
                {" "}
                <span className="modal__text">Name :</span>
              </p>
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <p className="item">
                {" "}
                <span className="modal__text">Email :</span>
              </p>
              <input
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
            </form>
          </div>{" "}
          <a class="modal__btn" onClick={addNewUser}>
            Add &rarr;{" "}
          </a>
          <a href="#modal-closed" class="link-2"></a>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (x) => dispatch(add(x)),
  };
};
export default connect(null, mapDispatchToProps)(AddUser);
