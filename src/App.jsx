import { RouterProvider } from "react-router-dom";
import { route } from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
// import MenuBar from "./pages/nav/MenuBar";

import MenuBar from "/src/pages/nav/MenuBar"; // Correct import
import ListTable from "./pages/table/ListTable";

function App() {
  return (
    <>
      {/* <RouterProvider router={route} /> */}
      <MenuBar></MenuBar>
      {/* <ListTable></ListTable> */}
    </>
  );
}

export default App;
