import "../styles/App.scss";
import callToApi from "../services/api";
import { useState, useEffect } from "react";

function App() {
  // Estados

  const [variable, setVariable] = useState("");

  useEffect(() => {
    callToApi().then((response) => {
      setVariable(response);
    });
  }, []); // Array vacío porque quiero que llame a la API solo una vez

  return <>{/* código HTML */}</>;
}

export default App;
