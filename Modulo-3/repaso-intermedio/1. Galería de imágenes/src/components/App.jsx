import "../styles/App.scss";
import dataJson from "../services/data.json";
import Form from "./Form";
import ListCards from "./ListCards";

function App() {
  // Estados

  // Eventos

  return (
    <>
      <header>
        <h1>Listado de flores</h1>
      </header>
      <main>
        <Form />
        <ListCards listToPaint={dataJson} />
      </main>
    </>
  );
}

export default App;
