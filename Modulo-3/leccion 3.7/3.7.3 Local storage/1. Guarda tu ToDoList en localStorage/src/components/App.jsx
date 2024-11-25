import "../styles/App.scss";
import { useState, useEffect } from "react";
import localStorage from "../services/localStorage";

function App() {
  // Estados
  const [tasks, setTasks] = useState(localStorage.get("tasks", ""));

  // useEffect
  useEffect(() => {
    localStorage.set("tasks", tasks);
    console.log("Han cambiado las tareas");
  }, [tasks]);

  // Eventos
  const handleClick = (event) => {
    const taskClickedIndex = event.currentTarget.id;

    const foundTask = tasks.find((task) => {
      return task.id === parseInt(taskClickedIndex);
    });

    foundTask.completed = !foundTask.completed;

    setTasks([...tasks]);
  };

  // Funciones
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
