import React from "react";
import "../UserDetails/UserDetails.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "../AddUser/AddUser.css";

const UserDetails = (props) => {
  const userFound = props.userData.find(
    (user) => user.id == props.match.params.name
  );

  return (
    <div style={{ height: "753px" }}>
      {props.loading ? (
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                        <div class="m-b-25">
                          {console.log(props.image)}
                          <img
                            src={
                              userFound && userFound.id < 11
                                ? props.image[userFound && userFound.id - 1]
                                : "https://i.pinimg.com/736x/72/ef/ba/72efba8ba7185deaac209d8e0bb789a2.jpg"
                            }
                            class="img-radius"
                            alt="User-Profile-Image"
                          />{" "}
                        </div>
                        <h6 class="f-w-600 txt">
                          {userFound && userFound.name}
                        </h6>
                        <p className="txt">
                          {userFound && userFound.company.catchPhrase}
                        </p>{" "}
                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="card-block">
                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                          Information
                        </h6>
                        <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Email</p>
                            <h6 class="text-muted f-w-400">
                              {userFound && userFound.email}
                            </h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Phone</p>
                            <h6 class="text-muted f-w-400">
                              {userFound && userFound.phone}
                            </h6>
                          </div>
                        </div>
                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                          Address
                        </h6>
                        <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">City</p>
                            <h6 class="text-muted f-w-400">
                              {" "}
                              {userFound && userFound.address.city}
                            </h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">street</p>
                            <h6 class="text-muted f-w-400">
                              {" "}
                              {userFound && userFound.address.street}
                            </h6>
                          </div>
                        </div>
                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                          website
                        </h6>
                        <div class="row">
                          <div class="col-sm-6">
                            <h6 class="text-muted f-w-400">
                              {" "}
                              {userFound && userFound.website}
                            </h6>
                          </div>
                        </div>
                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="facebook"
                              data-abc="true"
                            >
                              <i
                                class="mdi mdi-facebook feather icon-facebook facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="twitter"
                              data-abc="true"
                            >
                              <i
                                class="mdi mdi-twitter feather icon-twitter twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="instagram"
                              data-abc="true"
                            >
                              <i
                                class="mdi mdi-instagram feather icon-instagram instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Link to="/">
        {" "}
        <a class="modal__btn" style={{ marginLeft: "700px" }}>
          Home
        </a>{" "}
      </Link>
    </div>
  );
};

export default UserDetails;
