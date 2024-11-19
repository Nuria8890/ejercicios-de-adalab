import "../styles/App.scss";

function App() {
  const tasks = [
    "Comprar harina, jamón y pan rallado",
    "Hacer croquetas ricas",
    "Ir a la puerta de un gimnasio",
    "Comerme las croquetas mirando a la gente que entra en el gimnasio",
  ];

  const renderList = () => {
    const list = tasks.map((task, i) => {
      return <li key={i}>{task}</li>;
    });

    return <ol>{list}</ol>;
  };

  return (
    <>
      <header className="header" id="header">
        <h1 className="header__title">Mi lista de tareas</h1>
      </header>
      <main>{renderList()}</main>
    </>
  );
}

export default App;
