import PropTypes from "prop-types";

function Form({ searchSerie, onChangeSerie }) {
  const handleChangeInput = (event) => {
    onChangeSerie(event.target.value);
  };
  return (
    <form>
      <label htmlFor="serieName">Busca una serie: </label>
      <input
        type="text"
        name="serieName"
        id="serieName"
        value={searchSerie}
        onChange={handleChangeInput}
      />
    </form>
  );
}

export default Form;

Form.prototype = {
  searchSerie: PropTypes.string.isRequired,
  onChangeSerie: PropTypes.func.isRequired,
};
