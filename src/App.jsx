import { RouterProvider } from "react-router-dom";
import { route } from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
