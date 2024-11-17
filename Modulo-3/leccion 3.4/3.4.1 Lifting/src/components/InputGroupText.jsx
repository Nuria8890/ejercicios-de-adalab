import PropTypes from "prop-types";

function InputGroupText(props) {
  const handleOnChange = (event) => {
    props.handleChange(event);
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
          onChange={handleOnChange}
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
  handleChange: PropTypes.func.isRequired,
};
