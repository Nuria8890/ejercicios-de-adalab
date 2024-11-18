import PropTypes from "prop-types";

function InputGroupText(props) {
  const handleInputChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <>
      <div className="input-group-text">
        <label className="label-text" htmlFor={props.inputId}>
          {props.labelText}
        </label>
        <input
          className="input-text"
          type="text"
          name={props.inputName}
          id={props.inputId}
          placeholder={props.inputPlaceholder}
          value={props.inputValue}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default InputGroupText;

InputGroupText.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
