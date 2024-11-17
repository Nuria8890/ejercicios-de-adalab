import PropTypes from "prop-types";

function Preview(props) {
  // Funciones que nos ayudan a renderizar
  const renderPaymentTypeText = () => {
    if (props.paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (props.paymentType === "cash") {
      return "Efectivo";
    } else if (props.paymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };

  return (
    <div className="preview">
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Región: {props.region}</li>
        <li>Método de pago: {renderPaymentTypeText()}</li>
        <li>
          Has aceptado nuestros términos legales:{" "}
          {props.legalTerms === true ? "Sí" : "No"}
        </li>
      </ul>
    </div>
  );
}

export default Preview;

Preview.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  paymentType: PropTypes.string.isRequired,
  legalTerms: PropTypes.bool.isRequired,
};
