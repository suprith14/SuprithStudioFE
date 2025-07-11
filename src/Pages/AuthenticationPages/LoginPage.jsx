import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Login from "../../Components/AuthenticationComponents/Login";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center my-8">
        <Login />
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
