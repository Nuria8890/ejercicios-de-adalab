// import { useState } from "react";
import "../styles/App.scss";

function App() {
  // const [checked, setChecked] = useState("");

  return (
    <>
      <header className="header" id="header">
        <h1 className="header__title">
          Selecciona los ingredientes de la tortilla de patatas
        </h1>
      </header>
      <form action="" className="form">
        <label>
          <input type="checkbox" name="tortilla" />
          macarrones
        </label>

        <label>
          <input type="checkbox" name="tortilla" />
          patatas
        </label>

        <label>
          <input type="checkbox" name="tortilla" />
          nueces
        </label>

        <label>
          <input type="checkbox" name="tortilla" />
          huevos
        </label>

        <label>
          <input type="checkbox" name="tortilla" />
          cebolla
        </label>

        <label>
          <input type="checkbox" name="tortilla" />
          cerveza
        </label>
      </form>
    </>
  );
}

export default App;
