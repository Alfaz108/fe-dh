// import React from "react";
// import { css } from "@emotion/react";
// import { RingLoader } from "react-spinners";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
// const LoadingData = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <RingLoader color={"#123abc"} css={override} size={150} />
//     </div>
//   );
// };

// export default LoadingData;

import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingData = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{ color: "blue" }}
      ></Spinner>
    </div>
  );
};

export default LoadingData;
