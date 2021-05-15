import "./App.css";
import UserList from "./UserList/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Load from "./Loading/Loading";
import { connect } from "react-redux";
import { fetchData } from "./redux/Actions";
import AddUser from "./AddUser/AddUser";
import Welcome from "./Welcome/Welcome";
function App({ userData, fetchData, loading }) {
  useEffect(() => {
    fetchData();
  }, []);

  const [image, setImage] = useState([
    "https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318",

    "https://cdna.artstation.com/p/assets/images/images/032/798/720/smaller_square/maria-dimova-lisa.jpg?1607507658",

    "https://cdna.artstation.com/p/assets/images/images/024/558/406/large/ka0rii-drawing-avatar-struker.jpg?1582803353",

    "https://i.pinimg.com/originals/f7/b9/b1/f7b9b120c77283b453fef90491c2546e.png",

    "https://cdnb.artstation.com/p/assets/images/images/028/134/239/large/lanz-flores-twitch-avatar-3.jpg?1593581241",

    "https://cdna.artstation.com/p/assets/images/images/029/898/544/large/what8me-twitchvica-backround.jpg?1598974370",

    "https://pbs.twimg.com/media/CCtGYRIWEAAvd7l.jpg",

    "https://cdna.artstation.com/p/assets/images/images/032/388/026/20201125031157/smaller_square/maria-dimova-lobo-web.jpg?1606295517",

    "https://cdna.artstation.com/p/assets/covers/images/012/890/262/large/lennin-rodrigues-img-0257.jpg?1537036518",

    "https://cdna.artstation.com/p/assets/images/images/009/836/576/large/maria-bo-me-normal.jpg?1521139645",
  ]);

  return (
    <BrowserRouter>
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <>
              {loading ? (
                <>
                  {" "}
                  <Welcome /> <AddUser />
                  <UserList userData={userData} image={image} />
                </>
              ) : (
                <Load />
              )}{" "}
            </>
          )}
        />
        <Route
          path="/User/:name"
          render={(props) => (
            <>
              {" "}
              <UserDetails
                {...props}
                userData={userData}
                image={image}
                loading={loading}
              />{" "}
              {console.log("hello" + [{ ...props }])}{" "}
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.users,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
