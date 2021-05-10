import axios from "axios";
import { FETCH_USERS, ADD_USER } from "./ActionsTypes";

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUsers(users));
      })
      .catch((error) => {
        const err = error.message;
      });
  };
};
export const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  };
};
export const addUser = (usr) => {
  return {
    type: ADD_USER,
    payload: usr.data,
  };
};

export const add = (newUser) => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => {
        console.log(res);
        dispatch(addUser(res));
        console.log(newUser);
      })
      .catch((error) => {
        const err = error.message;
      });
  };
};
