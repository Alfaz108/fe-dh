import { useState } from "react";
import "./App.css";
import Login from "./log/login";
import Register from "./log/Register";
import Coloum from "./Coloum/Coloum";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Register></Register>
        <Login></Login> */}
        <Coloum></Coloum>
      </div>
    </>
  );
}

export default App;
