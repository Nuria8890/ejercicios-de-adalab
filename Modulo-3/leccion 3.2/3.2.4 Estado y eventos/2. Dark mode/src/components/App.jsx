import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("");
  const [onOff, setonOff] = useState("desactivado");

  const renderDarkModeText = () => {
    if (mode === "") {
      console.log("el modo es nulo");
      setmode("dark");
      setonOff("activado");
    } else {
      console.log("el modo es dark");
      setmode("");
      setonOff("desactivado");
    }
  };
  return (
    <>
      <div className={mode}>
        <button onClick={renderDarkModeText}>Des/activar dark mode</button>
        <br />
        <p>Tienes {onOff} el dark mode</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          reprehenderit quas saepe quibusdam cumque! Magni, similique? Illo
          voluptate nobis expedita exercitationem pariatur earum minus,
          recusandae autem alias soluta dolores ipsam!
        </p>
      </div>
    </>
  );
}

export default App;
