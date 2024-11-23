import PropTypes from "prop-types";

function Form({ onChangeInput }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value);
  };
  return (
    <form>
      <label htmlFor="flor">Busca una flor: </label>
      <input type="text" name="flor" id="flor" onChange={handleChangeInput} />
    </form>
  );
}

export default Form;

Form.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
};
