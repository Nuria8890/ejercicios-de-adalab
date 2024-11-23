import "../styles/App.scss";
import dataJson from "../services/data.json";
import Form from "./Form";
import ListCards from "./ListCards";
import { useState } from "react";

function App() {
  // Estados
  const [flowerName, setFlowerName] = useState("");
  // Eventos
  const handleChangeInput = (value) => {
    setFlowerName(value);
  };
  // JS
  const filteredFlower = dataJson.filter((flower) => {
    return flower.nombre
      .toLocaleLowerCase()
      .includes(flowerName.toLocaleLowerCase());
  });

  return (
    <>
      <header>
        <h1>Listado de flores</h1>
      </header>
      <main>
        <Form onChangeInput={handleChangeInput} />
        <ListCards listToPaint={filteredFlower} />
      </main>
    </>
  );
}

export default App;
