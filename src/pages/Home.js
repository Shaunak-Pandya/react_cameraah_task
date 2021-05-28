import React from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "./components/CardComponent";

const Home = () => {
  const history = useHistory();
  const checkLoginStatus = localStorage.getItem("isLoggedIn");
  if (checkLoginStatus === false) {
    // console.log("User has logged out");
    history.push("/login");
  } else if (checkLoginStatus === null) {
    // console.log("User never logged in");
    history.push("/login");
  } else {
    const loggedUser = localStorage.getItem("currentUser");
    if (loggedUser === null) {
      // console.log("No user logged");
      history.push("/login");
    } else {
      const data = JSON.parse(localStorage.getItem(loggedUser));
      var name = data.name;
      var email = data.email;
    }
  }

  return (
    <CardComponent
      cardEmail={email ? email : "Unlogged Email"}
      cardName={name ? name : "Unlogged Name"}
    />
  );
};

export default Home;
