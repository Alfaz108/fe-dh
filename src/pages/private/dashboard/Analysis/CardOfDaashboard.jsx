import React from "react";
import img from "./../../../../assets/logo/Typing.png";

const CardOfDaashboard = () => {
  return (
    <div
      style={{
        height: "150px",
        position: "relative",
        border: "none",
        borderRadius: "10px",
      }}
      class="  mb-4 bg-primary">
      <div class="row text-white">
        <div class="col-md-6">
          <div class="py-3 ps-2">
            <h5 class="card-title ">Hello Friend</h5>
            <p className="form-text text-white">
              You have 16 new applications. it is a lot of work for today! So
              let's start &#129395;{" "}
            </p>
            <span className="form-text text-white  btn-link">review it!</span>
          </div>
        </div>
        <div style={{}} class="col-md-6  ">
          <img
            style={{
              position: "absolute",
              width: "250px",
              bottom: "-12px",
              padding: "20px",
            }}
            src={img}
            class="img-fluid d-none p-2 rounded-start d-lg-block d-md-none d-sm-none d-xs-none d-xl-block"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default CardOfDaashboard;
