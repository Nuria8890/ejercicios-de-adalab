import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Comprar harina, jamón y pan rallado", completed: true, id: 1 },
    { task: "Hacer croquetas ricas", completed: true, id: 2 },
    { task: "Ir a la puerta de un gimnasio", completed: false, id: 3 },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
      id: 4,
    },
  ]);

  const handleClick = (event) => {
    const taskClickedIndex = event.currentTarget.id;

    const foundTask = tasks.find((task) => {
      return task.id === parseInt(taskClickedIndex);
    });

    foundTask.completed = !foundTask.completed;

    setTasks([...tasks]);
  };

  const renderList = () => {
    const list = tasks.map((task) => {
      return (
        <li
          className={task.completed ? "strike" : ""}
          key={task.id}
          id={task.id}
          onClick={handleClick}
        >
          {task.task}
        </li>
      );
    });

    return <ol className="list__ol">{list}</ol>;
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
