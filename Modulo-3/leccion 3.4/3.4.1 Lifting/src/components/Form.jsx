import PropTypes from "prop-types";
import InputGroupText from "./InputGroupText";

function Form(props) {
  return (
    <form className="form" onSubmit={props.handleonSubmitForm}>
      <h2>Rellena tus datos para finalizar la compra:</h2>
      <div className="form">
        {/* name */}

        <InputGroupText
          labelText={"Escribe un nombre:"}
          inputName={"name"}
          inputId={"name"}
          inputPlaceholder={"María García"}
          inputValue={props.inputValueName}
          onChange={props.setName}
        />

        {/* email */}
        <InputGroupText
          labelText={"Escribe un email:"}
          inputName={"email"}
          inputId={"email"}
          inputPlaceholder={"mariagarcia@gmail.com"}
          inputValue={props.inputValueEmail}
          onChange={props.setEmail}
        />
        {/*
         region 
        <div className="input-group-select">
          <label className="label-text" htmlFor="region">
            Indica tu región:
          </label>
          <select
            className="input-select"
            name="region"
            id="region"
            value={region}
            onChange={handleRegion}
          >
            <option>España peninsular</option>
            <option>Islas Canarias</option>
            <option>Islas Baleares</option>
            <option>Ceuta</option>
            <option>Melilla</option>
          </select>
        </div>

         payment type 
        <label className="label-text">Indica tu método de pago:</label>

        <div className="input-group-radio">
          <label className="label-radio" htmlFor="creditCard">
            Tarjeta de crédito
          </label>
           Este radio solo debe aparecer activo cuando paymentType sea creditCard 
          <input
            type="radio"
            name="paymentType"
            id="creditCard"
            value="creditCard"
            checked={paymentType === "creditCard"}
            onChange={handlePaymentType}
          />
        </div>

        <div className="input-group-radio">
          <label className="label-radio" htmlFor="cash">
            Efectivo
          </label>
           Este radio solo debe aparecer activo cuando paymentType sea cash 
          <input
            type="radio"
            name="paymentType"
            id="cash"
            value="cash"
            checked={paymentType === "cash"}
            onChange={handlePaymentType}
          />
        </div>

        <div className="input-group-radio">
          <label className="label-radio" htmlFor="cashOnDelivery">
            Contra reembolso
          </label>
           Este radio solo debe aparecer activo cuando paymentType sea cashOnDelivery 
          <input
            type="radio"
            name="paymentType"
            id="cashOnDelivery"
            value="cashOnDelivery"
            checked={paymentType === "cashOnDelivery"}
            onChange={handlePaymentType}
          />
        </div>

        legal terms 
        <div className="input-group-checkbox">
          <label className="label-check" htmlFor="legalTerms">
            Debes aceptar nuestros términos legales para completar la compra:
          </label>
          Este radio solo debe aparecer activo cuando legalTerms sea true 
          <input
            type="checkbox"
            name="legalTerms"
            id="legalTerms"
            checked={legalTerms}
            onChange={handleLegalTerms}
          />
        </div>
      </div>

       reset 
      { Este botón debe estar inhabilitado mientras el formulario no sea válido 
      <input
        className="button"
        type="submit"
        value="Enviar"
        disabled={isValidForm() === false}
      />

      send 
      <button className="button reset" onClick={handleResetButton}>
        Limpiar el formulario
      </button>*/}
      </div>
    </form>
  );
}

export default Form;

Form.propTypes = {
  handleonSubmitForm: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  inputValueName: PropTypes.string.isRequired,
  inputValueEmail: PropTypes.string.isRequired,
};
