import PropTypes from "prop-types";

function Button({ buttonAddNewTask }) {
  const handleClickButton = (event) => {
    event.preventDefault();
    buttonAddNewTask();
  };

  return <button onClick={handleClickButton}>Añadir tarea</button>;
}

export default Button;

Button.propTypes = {
  buttonAddNewTask: PropTypes.func.isRequired,
};
