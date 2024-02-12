import { useState } from "react";
import "./App.css";
import Login from "./log/login";
import Register from "./log/Register";
import CardTable from "./Table/CardTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        {/* <Register></Register>
        <Login></Login> */}

        <CardTable></CardTable>
      </div>
    </>
  );
}

export default App;
