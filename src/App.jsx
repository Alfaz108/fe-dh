import { RouterProvider } from "react-router-dom";
import { route } from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
import ListTable from "./pages/table/ListTable";
import Show from "./pages/dashboard/Sow";

function App() {
  return (
    <>
      {/* <RouterProvider router={route} /> */}
      {/* <MenuBar></MenuBar> */}
      {/* <ListTable></ListTable> */}

      <Show></Show>
    </>
  );
}

export default App;
