import "../styles/App.scss";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import Form from "./Form";
import ListSeries from "./ListSeries";

function App() {
  // Estados

  const [searchSerie, setSearchSerie] = useState("");
  const [serieFound, setSerieFound] = useState("");

  // Código JS

  const changeSerie = (value) => {
    setSearchSerie(value);
  };

  useEffect(() => {
    callToApi(searchSerie).then((response) => {
      console.log("response", response);
      setSerieFound(response);
    });
  }, [searchSerie]);

  const renderSeries = () => {
    return <li></li>;
  };

  return (
    <>
      <main>
        <Form searchSerie={searchSerie} onChangeSerie={changeSerie} />
        <p>Estás buscando la serie: {searchSerie}</p>
        <ListSeries serieFound={serieFound} />
      </main>
    </>
  );
}

export default App;
