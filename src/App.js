import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserList from "./UserList/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUSer(res.data);
        setLoading(false);
      } catch (error) {
        console.log("err");
      }
    };
    fetchData();
  }, []);

  console.log(listOfUSer);
  return (
    <BrowserRouter>
      <div>
        <Route
          exact={true}
          path="/"
          render={() => <UserList listOfUSer={listOfUSer} />}
        />
        <Route
          path="/User/:name"
          render={(props) => <UserDetails {...props} listOfUSer={listOfUSer} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
