import React from "react";
import img from "../../assets/image/error.svg";

const ErrorPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img className="w-25" src={img} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
