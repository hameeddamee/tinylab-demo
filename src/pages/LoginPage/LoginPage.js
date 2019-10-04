import React from "react";
import Login from "../../components/Login/Login";
import LoginImage from "../../images/bg-01.jpg";

const LoginPage = () => {
  return (
    // <div className="limiter">
    <div className="container-login100">
      <div
        className="login100-more"
        style={{ backgroundImage: `url(${LoginImage})` }}
      ></div>
      <Login></Login>
    </div>
    // </div>
  );
};

export default LoginPage;
