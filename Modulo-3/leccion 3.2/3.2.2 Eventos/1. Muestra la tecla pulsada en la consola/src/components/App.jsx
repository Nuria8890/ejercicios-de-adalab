import "../styles/App.scss";

function App() {
  const handleInput = (event) => {
    console.log("event.key es", event.key);

    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <>
      <form action="">
        <label htmlFor="">Escribe </label>
        <input onKeyDown={handleInput} type="text" />
      </form>
    </>
  );
}

export default App;
