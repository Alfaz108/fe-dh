import { useState } from "react";
import "./App.css";
import Login from "./log/login";
import Register from "./log/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Register></Register>
        <Login></Login>
      </div>
    </>
  );
}

export default App;
