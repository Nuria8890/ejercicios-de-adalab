import "../styles/App.scss";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import Form from "./Form";
import ListSeries from "./ListSeries";

function App() {
  // Estados

  const [searchSerie, setSearchSerie] = useState("");
  const [seriesFound, setSeriesFound] = useState([]);

  // Código JS

  const changeSerie = (value) => {
    setSearchSerie(value);
  };

  useEffect(() => {
    callToApi(searchSerie).then((response) => {
      console.log("response", response);
      setSeriesFound(response);
    });
  }, [searchSerie]);

  return (
    <>
      <main>
        <Form searchSerie={searchSerie} onChangeSerie={changeSerie} />
        <p>Estás buscando la serie: {searchSerie}</p>
        <ListSeries onSeriesFound={seriesFound} />
      </main>
    </>
  );
}

export default App;
