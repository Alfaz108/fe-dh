import { RouterProvider } from "react-router-dom";
import { route } from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
// import MenuBar from "./pages/nav/MenuBar";

import MenuBar from "/src/pages/nav/MenuBar"; // Correct import

function App() {
  return (
    <>
      {/* <RouterProvider router={route} /> */}
      <MenuBar></MenuBar>
    </>
  );
}

export default App;
