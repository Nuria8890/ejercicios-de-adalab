import "../styles/layout/Form.scss";
import PropTypes from "prop-types";
import Button from "./Button";

function Form({ onChangeInput, inputTask, addNewTask }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value);
  };

  return (
    <form className="form">
      <label htmlFor="newTask">Añade una nueva tarea: </label>
      <input
        type="text"
        name="newTask"
        id="newTask"
        value={inputTask}
        onChange={handleChangeInput}
      />
      <Button buttonAddNewTask={addNewTask} />
    </form>
  );
}

export default Form;

Form.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  inputTask: PropTypes.string.isRequired,
  addNewTask: PropTypes.func.isRequired,
};
