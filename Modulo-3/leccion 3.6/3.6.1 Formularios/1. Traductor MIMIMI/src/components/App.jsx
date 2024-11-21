import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [mimi, setMimi] = useState("");

  const handleChange = (event) => {
    const valor = event.target.value;
    setMimi(valor.replace(/[A-Z a-z]/gi, "MI"));
  };

  return (
    <>
      <form>
        <label htmlFor="texto">Escribe un mensaje:</label>
        <textarea name="texto" id="texto" onChange={handleChange}></textarea>
      </form>
      <p>{mimi}</p>
    </>
  );
}

export default App;
