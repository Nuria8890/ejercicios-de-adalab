import "../styles/App.scss";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  // Estados

  const [searchSerie, setSearchSerie] = useState("");

  // Código JS

  const changeSerie = (value) => {
    setSearchSerie(value);
  };

  // useEffect(() => {
  //   callToApi().then((response) => {
  //     setSearchSerie(response);
  //   });
  // }, [searchSerie]);

  return (
    <>
      <main>
        <Form searchSerie={searchSerie} onChangeSerie={changeSerie} />
        <p>Estás buscando la serie: {searchSerie}</p>
      </main>
    </>
  );
}

export default App;
