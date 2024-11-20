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

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const [totalTasks, setTotalTasks] = useState("4");
  const [completedTasks, setCompletedTasks] = useState("2"); // cuando consiga lo de tachar tareas, será: setCompletedTasks(tareasTachadas.length)
  const [pendingTasks, setPendingTasks] = useState("2"); // será: setPendingTasks(setTotalTasks - setCompletedTasks)

  const handleFilter = (event) => {
    const value = event.target.value;

    const tasksFiltered = tasks.filter((taskLi) => {
      return taskLi.task.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredTasks(tasksFiltered);
    setTotalTasks(tasksFiltered.length);
  };

  const handleClick = (event) => {
    const taskClickedIndex = event.currentTarget.id;

    const foundTask = tasks.find((task) => {
      task.id === taskClickedIndex;
      console.log("task.id", task.id);
      console.log("taskClickedIndex", taskClickedIndex);
    });
    console.log(foundTask);
    foundTask.completed = !foundTask.completed;

    setTasks([...tasks]);
  };

  const renderList = () => {
    const list = filteredTasks.map((task) => {
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

    return <ol className="listOl">{list}</ol>;
  };

  return (
    <>
      <header className="header" id="header">
        <h1 className="header__title">Mi lista de tareas</h1>
      </header>
      <main>
        <label htmlFor="filter">Busca tu tarea: </label>
        <input type="text" name="filter" id="filter" onChange={handleFilter} />
        <p>Tareas totales: {totalTasks}</p>
        <p>Tareas completadas: {completedTasks}</p>
        <p>Tareas pendientes: {pendingTasks}</p>
        <ul>{renderList()}</ul>
      </main>
    </>
  );
}

export default App;
