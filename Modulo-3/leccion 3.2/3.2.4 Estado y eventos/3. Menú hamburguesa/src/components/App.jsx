import "../styles/App.scss";
import iconoAdalab from "../images/logoAdalab.png";
import { useState } from "react";

function App() {
  const [openClose, setOpenClose] = useState("collapse");

  const handleOpenClose = () => {
    if (openClose === "collapse") {
      setOpenClose("");
    } else {
      setOpenClose("collapse");
    }
  };

  return (
    <>
      <img
        src={iconoAdalab}
        alt="icono de Adalab"
        className="icono"
        onClick={handleOpenClose}
      />
      <div className={openClose}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
        <button onClick={handleOpenClose}>Close</button>
      </div>
    </>
  );
}

export default App;
