import "../styles/App.scss";
import { useState, useEffect } from "react";
import localStorage from "../services/localStorage";
import Form from "./Form";

function App() {
  // Estados
  const [tasks, setTasks] = useState(localStorage.get("tasks", ""));

  const [newTask, setNewTask] = useState("");

  // useEffect
  useEffect(() => {
    console.log("useEffect");
    localStorage.set("tasks", tasks);
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

  const changeInputValue = (value) => {
    setNewTask(value);
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

    return <ol className="listOl">{list}</ol>;
  };

  const addNewTask = () => {
    console.log("añadiendo una nueva tarea", newTask);

    /* Opción 1
      const newTaskObject = {
        task: newTask,
        id: tasks.length + 1,
        completed: false,
      };

    setTasks([...tasks, newTaskObject]);
    setNewTask("");
    */

    //Opción 2
    tasks.push({
      task: newTask,
      id: tasks.length + 1,
      completed: false,
    });
    setTasks([...tasks]);
    setNewTask("");
  };
  return (
    <>
      <header className="header" id="header">
        <h1 className="header__title">Mi lista de tareas</h1>
      </header>
      <main>
        <Form
          onChangeInput={changeInputValue}
          inputTask={newTask}
          addNewTask={addNewTask}
        />
        {renderList()}
      </main>
    </>
  );
}

export default App;
