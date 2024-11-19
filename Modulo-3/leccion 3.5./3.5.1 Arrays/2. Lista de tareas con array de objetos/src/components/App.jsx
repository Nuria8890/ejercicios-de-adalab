import "../styles/App.scss";

function App() {
  const tasks = [
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gym",
      completed: false,
    },
  ];

  const renderList = () => {
    const list = tasks.map((task, i) => {
      return (
        <li className={task.completed ? "strike" : ""} key={i}>
          {task.task}
        </li>
      );
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
