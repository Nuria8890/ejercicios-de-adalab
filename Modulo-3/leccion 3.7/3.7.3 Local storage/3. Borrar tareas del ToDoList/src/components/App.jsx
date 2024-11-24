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
    localStorage.set("tasks", tasks);
  }, [tasks]);

  // Eventos
  const handleClickList = (event) => {
    const taskClickedId = event.currentTarget.id;

    const foundTask = tasks.find((task) => {
      return task.id === parseInt(taskClickedId);
    });

    foundTask.completed = !foundTask.completed;

    setTasks([...tasks]);
  };

  const changeInputValue = (value) => {
    setNewTask(value);
  };

  const handleClickButton = (event) => {
    const buttonClickedId = event.target.id;

    const newTasks = tasks.filter((task) => {
      return task.id !== parseInt(buttonClickedId);
    });
    setTasks([...newTasks]);
  };

  // Funciones
  const renderList = () => {
    const list = tasks.map((task) => {
      return (
        <div className="list__li" key={task.id}>
          <li
            className={task.completed ? "strike" : ""}
            id={task.id}
            onClick={handleClickList}
          >
            {task.task}
          </li>
          <button id={task.id} onClick={handleClickButton}>
            Delete
          </button>
        </div>
      );
    });

    return <ol className="list__ol">{list}</ol>;
  };

  const addNewTask = () => {
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
